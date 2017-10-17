package AngularBoot;

import AngularBoot.eap.AdminAPI;
import AngularBoot.helper.ChildNodeHelper;
import AngularBoot.lineage.*;
import org.jboss.as.controller.client.ModelControllerClient;
import org.jboss.as.controller.client.OperationBuilder;
import org.jboss.as.controller.client.helpers.ClientConstants;
import org.jboss.dmr.ModelNode;
import org.teiid.adminapi.*;

import java.io.Closeable;
import java.io.IOException;
import java.net.InetAddress;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by mcouliba on 28/06/2017.
 */
public class ManagementAPI {

    private static ModelControllerClient modelControllerClient;

    private ManagementAPI() {

    }

    private static ModelControllerClient getModelControllerClient() throws IOException  {
        if (modelControllerClient == null) {
            modelControllerClient = ModelControllerClient.Factory.create(InetAddress.getByName("127.0.0.1"), 9999);
        }
        return modelControllerClient;
    }

    public static List<VDB> getVDBs() throws Exception, AdminException {
        List<VDB> result = null;
        Admin admin = AdminAPI.getServerAdmin();
        Collection<? extends VDB> vdbs = admin.getVDBs();

        return new ArrayList<VDB>(vdbs);
    }

    public static List<String> getDataSources() throws Exception, AdminException {
        List<String> result = null;
        Admin admin = AdminAPI.getServerAdmin();
        Collection<String> datasources = admin.getDataSourceNames();

        return new ArrayList<String>(datasources);
    }

    public static ServerNode getDataLineage() throws Exception {
        ServerNode result = null;
        List<VDBNode> vdbNodes = new ArrayList<VDBNode>();

        final List<VDB> vdbs = getVDBs();

        for (VDB vdb : vdbs) {
            ChildNodeHelper.init(vdb.getName());
            List<ChildNode> childNodes = getChildNodes(vdb.getName());
            vdbNodes.add(new VDBNode(vdb.getName(), childNodes));
        }

        result = new ServerNode("JDV_ROOT", vdbNodes);
        return result;
    }

    private static List<ChildNode> getChildNodes(String vdbName) throws Exception {
        List<ChildNode> result = new ArrayList<ChildNode>();

        final ModelNode request = new ModelNode();
        request.get(ClientConstants.OP).set("execute-query");
        request.get("vdb-name").set(vdbName);
        request.get("vdb-version").set(1);
        request.get("sql-query").set(
                "select Name, SchemaName, IsPhysical from sys.tables where not IsSystem "
                        + " and VDBName='" + vdbName + "'");
        request.get("timeout-in-milli").set(60000);
        request.get(ClientConstants.OP_ADDR).add("subsystem", "teiid");

        ModelControllerClient client = null;
        try {
            client = ModelControllerClient.Factory.create(InetAddress.getByName("127.0.0.1"), 9999);
            final ModelNode response = client.execute(new OperationBuilder(request).build());
            reportFailure(response);

            if(!response.get(ClientConstants.RESULT).asString().equals("undefined")) {
                final List<ModelNode> tables = response.get(ClientConstants.RESULT).asList();

                for (ModelNode table : tables) {
                    String schemaName = table.get("SchemaName").asString();
                    String tableName = table.get("Name").asString();
                    boolean isPhysical = table.get("IsPhysical").asBoolean();

                    String nodeName = schemaName + "." + tableName;
                    if (ChildNodeHelper.isRootTableNode(vdbName, schemaName, tableName)) {


                        if (isPhysical) {
                            List<DataSourceNode> datasourceNodes = ChildNodeHelper.getDataSourceNodes(vdbName, schemaName);
                            result.add(new TableNode(nodeName, datasourceNodes));
                        } else {
                            List<ChildNode> sourceChildNodes = ChildNodeHelper.getChildNodes(vdbName, schemaName, tableName);
                            result.add(new ViewNode(nodeName, sourceChildNodes));
                        }
                    }
                }
            }
        }
        catch (IOException e) {
            // Do nothing
        }
        finally {
            safeClose(client);
        }

        return result;
    }

    private static void safeClose(final Closeable closeable) {
        if (closeable != null) try {
            closeable.close();
        } catch (Exception e) {
            // no-op
        }
    }


    private static void reportFailure(final ModelNode node) {
        if (!node.get(ClientConstants.OUTCOME).asString().equals(ClientConstants.SUCCESS)) {
            final String msg;
            if (node.hasDefined(ClientConstants.FAILURE_DESCRIPTION)) {
                if (node.hasDefined(ClientConstants.OP)) {
                    msg = String.format("Operation '%s' at address '%s' failed: %s", node.get(ClientConstants.OP), node.get(ClientConstants.OP_ADDR), node.get(ClientConstants.FAILURE_DESCRIPTION));
                } else {
                    msg = String.format("Operation failed: %s", node.get(ClientConstants.FAILURE_DESCRIPTION));
                }
            } else {
                msg = String.format("Operation failed: %s", node);
            }
            throw new RuntimeException(msg);
        }
    }
}
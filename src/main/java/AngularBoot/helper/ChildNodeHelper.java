package AngularBoot.helper;

import AngularBoot.eap.AdminAPI;
import AngularBoot.lineage.ChildNode;
import AngularBoot.lineage.DataSourceNode;
import AngularBoot.lineage.TableNode;
import AngularBoot.lineage.ViewNode;
import org.jboss.as.controller.client.ModelControllerClient;
import org.jboss.as.controller.client.OperationBuilder;
import org.jboss.as.controller.client.helpers.ClientConstants;
import org.jboss.dmr.ModelNode;
import org.teiid.adminapi.Admin;
import org.teiid.adminapi.Model;
import org.teiid.adminapi.VDB;
import org.teiid.adminapi.impl.ModelMetaData;
import org.teiid.adminapi.impl.SourceMappingMetadata;

import java.io.Closeable;
import java.io.IOException;
import java.net.InetAddress;
import java.util.*;

/**
 * Created by mcouliba on 10/10/2017.
 */
public class ChildNodeHelper {

    public final static String TABLE_TYPE = "Table";
    public final static String VIEW_TYPE = "View";

    private static List<ModelNode> usagenodes = null;
    private static Map<String, List<Model>> models = new HashMap<String, List<Model>>();

    public static void init(String vdbName) {
        final ModelNode request = new ModelNode();
        request.get(ClientConstants.OP).set("execute-query");
        request.get("vdb-name").set(vdbName);
        request.get("vdb-version").set(1);
        request.get("sql-query").set(
                "select * from sysadmin.usage where "
                        + " Uses_object_type in ('" + TABLE_TYPE + "', '" + VIEW_TYPE + "')"
        );
        request.get("timeout-in-milli").set(60000);
        request.get(ClientConstants.OP_ADDR).add("subsystem", "teiid");

        ModelControllerClient client = null;
        try {
            client = ModelControllerClient.Factory.create(InetAddress.getByName("127.0.0.1"), 9999);
            final ModelNode response = client.execute(new OperationBuilder(request).build());
            reportFailure(response);

            if(!response.get(ClientConstants.RESULT).asString().equals("undefined")) {
                usagenodes = response.get(ClientConstants.RESULT).asList();
            }
        }
        catch (IOException e) {
            // Do nothing
        }
        finally {
            safeClose(client);
        }
    }

    public static boolean isRootTableNode(String vdbName, String schemaName, String tableName) {
        boolean result = true;
        int count = 0;

        while (result && (count < usagenodes.size())) {
            ModelNode usagenode = usagenodes.get(count);

            String sourceTableName = usagenode.get("Uses_Name").asString();
            String sourceSchemaName = usagenode.get("Uses_SchemaName").asString();

            if (sourceSchemaName.equals(schemaName) && sourceTableName.equals(tableName)) {
                result = false;
            }
            count++;
        }
        return result;
    }

    public static List<ChildNode> getChildNodes(String vdbName, String schemaName, String tableName) throws Exception {
        List<ChildNode> result = new ArrayList<ChildNode>();

        for (ModelNode usagenode : usagenodes) {
            String targetTableName = usagenode.get("Name").asString();
            String targetSchemaName = usagenode.get("SchemaName").asString();

            if (targetSchemaName.equals(schemaName) && targetTableName.equals(tableName)) {
                String sourceTableName = usagenode.get("Uses_Name").asString();
                String sourceSchemaName = usagenode.get("Uses_SchemaName").asString();
                String sourceType = usagenode.get("Uses_object_type").asString();

                String nodeName = sourceSchemaName + "." + sourceTableName;

                switch (sourceType) {
                    case VIEW_TYPE:
                        List<ChildNode> sourceChildNodes = getChildNodes(vdbName, sourceSchemaName, sourceTableName);
                        result.add(new ViewNode(nodeName, sourceChildNodes));
                        break;
                    case TABLE_TYPE:
                        result.add(new TableNode(nodeName, ChildNodeHelper.getDataSourceNodes(vdbName, sourceSchemaName)));
                        break;
                }
            }
        }

        return result;
    }

    public static List<DataSourceNode> getDataSourceNodes(String vdbName, String schemaName) throws Exception {
        List<DataSourceNode> result = new ArrayList<DataSourceNode>();
        Admin admin = AdminAPI.getServerAdmin();
        final VDB vdb = admin.getVDB(vdbName, 1);

        List<Model> models = vdb.getModels();
        ModelMetaData modelMetaData = ChildNodeHelper.getModelMetaData(vdbName, schemaName);

        if (modelMetaData != null) {
            final Collection<SourceMappingMetadata> sourceMappingMetadatas = modelMetaData.getSourceMappings();

            for (SourceMappingMetadata sourceMappingMetadata : sourceMappingMetadatas) {
                DataSourceNode dataSourceNode =
                        new DataSourceNode(sourceMappingMetadata.getName(), sourceMappingMetadata.getConnectionJndiName());
                result.add(dataSourceNode);
            }
        }

        return result;
    }

    private static List<Model> getModels(String vdbName) throws Exception {
        if (!models.containsKey(vdbName)) {
            Admin admin = AdminAPI.getServerAdmin();
            final VDB vdb = admin.getVDB(vdbName, 1);

            models.put(vdbName, vdb.getModels());
        }
        return models.get(vdbName);
    }

    private static ModelMetaData getModelMetaData(String vdbName, String schemaName) throws Exception {
        ModelMetaData result = null;

        for (Model model :  ChildNodeHelper.getModels(vdbName)) {
            if (model.getName().equals(schemaName)) {
                result = (ModelMetaData) model;
                break;
            }
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

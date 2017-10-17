package AngularBoot.eap;

import org.jboss.as.controller.client.ModelControllerClient;
import org.teiid.adminapi.Admin;
import org.teiid.adminapi.jboss.AdminFactory;

/**
 * Created by mcouliba on 13/10/2017.
 */
public class AdminAPI {
    private static Admin serverAdmin;

    public static Admin getServerAdmin() throws Exception {
        if (serverAdmin == null) {
            try {
                serverAdmin = AdminFactory.getInstance().createAdmin(ModelControllerClient.Factory.create("127.0.0.1",9999));
            }
            catch (Exception e) {
                throw new Exception(e.getMessage());
            }
        }
        return serverAdmin;
    }
}

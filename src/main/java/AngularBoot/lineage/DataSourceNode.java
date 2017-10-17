package AngularBoot.lineage;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class DataSourceNode extends ChildNode {
    private String jndiName;

    public DataSourceNode(String name, String jndiName) {
        super(name, ChildNode.TYPE_DATASOURCE, null);
        this.jndiName = jndiName;
    }

    public String getJndiName(){
        return jndiName;
    }
}

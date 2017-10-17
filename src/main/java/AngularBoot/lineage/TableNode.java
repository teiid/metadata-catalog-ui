package AngularBoot.lineage;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class TableNode extends ChildNode {

    public TableNode(String name, List<DataSourceNode> children) {
        super(name, ChildNode.TYPE_TABLE, children);
    }
}

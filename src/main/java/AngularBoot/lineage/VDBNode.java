package AngularBoot.lineage;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class VDBNode extends LineageNode {
    public VDBNode(String name, List<ChildNode> children) {
        super(name, LineageNode.TYPE_VDB, children);
    }
}

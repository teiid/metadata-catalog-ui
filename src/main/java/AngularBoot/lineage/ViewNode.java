package AngularBoot.lineage;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class ViewNode extends ChildNode {

    public ViewNode(String name, List<ChildNode> children) {
        super(name, ChildNode.TYPE_VIEW, children);
    }
}

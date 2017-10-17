package AngularBoot.lineage;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class ServerNode extends LineageNode {

    public ServerNode(String name, List<VDBNode> children) {
        super(name, LineageNode.TYPE_SERVER, children);
    }
}

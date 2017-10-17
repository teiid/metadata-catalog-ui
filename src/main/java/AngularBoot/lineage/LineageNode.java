package AngularBoot.lineage;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public abstract class LineageNode {
    public final static String TYPE_SERVER = "SERVER";
    public final static String TYPE_VDB = "VDB";

    private String name;
    private String type;
    private List<? extends LineageNode> children;

    public LineageNode(String name, String type, List<? extends LineageNode> children) {
        this.name = name;
        this.type = type;
        this.children = children;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public List<? extends LineageNode> getChildren() {
        return children;
    }
}

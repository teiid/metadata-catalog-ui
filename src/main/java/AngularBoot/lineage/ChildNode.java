package AngularBoot.lineage;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public abstract class ChildNode extends LineageNode {
    public final static String TYPE_TABLE = "TABLE";
    public final static String TYPE_VIEW = "VIEW";
    public final static String TYPE_DATASOURCE = "DATASOURCE";

    private String name;
    private String type;
    private List<? extends ChildNode> children;

    public ChildNode(String name, String type, List<? extends ChildNode> children) {
        super(name, type, children);
    }
}

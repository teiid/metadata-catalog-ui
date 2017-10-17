package AngularBoot.model;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class Schema {
    private final String name;
    private final String type;
    private final List<Table> tables;

    public Schema(String name, String type, List<Table> tables) {
        this.name = name;
        this.type = type;
        this.tables = tables;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public List<Table> getTables() {
        return tables;
    }
}

package AngularBoot.model;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class SourceTable {
    private final String name;
    private final List<Column> columns;
    private final String schemaName;

    public SourceTable(String name, List<Column> columns, String schemaName) {
        this.name = name;
        this.columns = columns;
        this.schemaName = schemaName;
    }

    public String getName() {
        return name;
    }

    public String getSchemaName() {
        return schemaName;
    }

    public List<Column> getColumns() {
        return columns;
    }
}

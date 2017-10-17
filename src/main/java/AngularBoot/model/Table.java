package AngularBoot.model;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class Table {
    private final String name;
    private final List<Column> columns;
    private final List<SourceTable> sourceTables;

    public Table(String name, List<Column> columns, List<SourceTable> sourceTables) {
        this.name = name;
        this.columns = columns;
        this.sourceTables = sourceTables;

    }

    public String getName() {
        return name;
    }

    public List<SourceTable> getSourceTables() {
        return sourceTables;
    }

    public List<Column> getColumns() {
        return columns;
    }
}

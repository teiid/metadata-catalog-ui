package AngularBoot.model;

import java.util.List;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class VirtualDataBase {
    private final String name;
    private final List<Schema> schemas;

    public VirtualDataBase(String name, List<Schema> schemas) {
        this.name = name;
        this.schemas = schemas;
    }

    public String getName() {
        return name;
    }

    public List<Schema> getSchemas() {
        return schemas;
    }
}

package AngularBoot.model;

/**
 * Created by mcouliba on 29/06/2017.
 */
public class Datasource {
    private final long id;
    private final String content;

    public Datasource(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}

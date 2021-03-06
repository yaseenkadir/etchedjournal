/*
 * This file is generated by jOOQ.
 */
package com.etchedjournal.etched.models.jooq.generated;


import com.etchedjournal.etched.models.jooq.generated.tables.Entry;
import com.etchedjournal.etched.models.jooq.generated.tables.Etch;
import com.etchedjournal.etched.models.jooq.generated.tables.Journal;
import com.etchedjournal.etched.models.jooq.generated.tables.KeyPair;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Generated;

import org.jooq.Catalog;
import org.jooq.Table;
import org.jooq.impl.SchemaImpl;


/**
 * This class is generated by jOOQ.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.9"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Public extends SchemaImpl {

    private static final long serialVersionUID = -808511408;

    /**
     * The reference instance of <code>public</code>
     */
    public static final Public PUBLIC = new Public();

    /**
     * The table <code>public.entry</code>.
     */
    public final Entry ENTRY = com.etchedjournal.etched.models.jooq.generated.tables.Entry.ENTRY;

    /**
     * The table <code>public.etch</code>.
     */
    public final Etch ETCH = com.etchedjournal.etched.models.jooq.generated.tables.Etch.ETCH;

    /**
     * The table <code>public.journal</code>.
     */
    public final Journal JOURNAL = com.etchedjournal.etched.models.jooq.generated.tables.Journal.JOURNAL;

    /**
     * The table <code>public.key_pair</code>.
     */
    public final KeyPair KEY_PAIR = com.etchedjournal.etched.models.jooq.generated.tables.KeyPair.KEY_PAIR;

    /**
     * No further instances allowed
     */
    private Public() {
        super("public", null);
    }


    /**
     * {@inheritDoc}
     */
    @Override
    public Catalog getCatalog() {
        return DefaultCatalog.DEFAULT_CATALOG;
    }

    @Override
    public final List<Table<?>> getTables() {
        List result = new ArrayList();
        result.addAll(getTables0());
        return result;
    }

    private final List<Table<?>> getTables0() {
        return Arrays.<Table<?>>asList(
            Entry.ENTRY,
            Etch.ETCH,
            Journal.JOURNAL,
            KeyPair.KEY_PAIR);
    }
}

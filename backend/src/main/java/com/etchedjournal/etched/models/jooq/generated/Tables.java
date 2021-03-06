/*
 * This file is generated by jOOQ.
 */
package com.etchedjournal.etched.models.jooq.generated;


import com.etchedjournal.etched.models.jooq.generated.tables.Entry;
import com.etchedjournal.etched.models.jooq.generated.tables.Etch;
import com.etchedjournal.etched.models.jooq.generated.tables.Journal;
import com.etchedjournal.etched.models.jooq.generated.tables.KeyPair;

import javax.annotation.Generated;


/**
 * Convenience access to all tables in public
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.9"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Tables {

    /**
     * The table <code>public.entry</code>.
     */
    public static final Entry ENTRY = com.etchedjournal.etched.models.jooq.generated.tables.Entry.ENTRY;

    /**
     * The table <code>public.etch</code>.
     */
    public static final Etch ETCH = com.etchedjournal.etched.models.jooq.generated.tables.Etch.ETCH;

    /**
     * The table <code>public.journal</code>.
     */
    public static final Journal JOURNAL = com.etchedjournal.etched.models.jooq.generated.tables.Journal.JOURNAL;

    /**
     * The table <code>public.key_pair</code>.
     */
    public static final KeyPair KEY_PAIR = com.etchedjournal.etched.models.jooq.generated.tables.KeyPair.KEY_PAIR;
}

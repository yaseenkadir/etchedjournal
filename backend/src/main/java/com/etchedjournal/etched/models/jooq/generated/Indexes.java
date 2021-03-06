/*
 * This file is generated by jOOQ.
 */
package com.etchedjournal.etched.models.jooq.generated;


import com.etchedjournal.etched.models.jooq.generated.tables.Entry;
import com.etchedjournal.etched.models.jooq.generated.tables.Etch;
import com.etchedjournal.etched.models.jooq.generated.tables.Journal;
import com.etchedjournal.etched.models.jooq.generated.tables.KeyPair;

import javax.annotation.Generated;

import org.jooq.Index;
import org.jooq.OrderField;
import org.jooq.impl.Internal;


/**
 * A class modelling indexes of tables of the <code>public</code> schema.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.9"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Indexes {

    // -------------------------------------------------------------------------
    // INDEX definitions
    // -------------------------------------------------------------------------

    public static final Index ENTRY_PKEY = Indexes0.ENTRY_PKEY;
    public static final Index ETCH_PKEY = Indexes0.ETCH_PKEY;
    public static final Index JOURNAL_PKEY = Indexes0.JOURNAL_PKEY;
    public static final Index KEY_PAIR_PKEY = Indexes0.KEY_PAIR_PKEY;

    // -------------------------------------------------------------------------
    // [#1459] distribute members to avoid static initialisers > 64kb
    // -------------------------------------------------------------------------

    private static class Indexes0 {
        public static Index ENTRY_PKEY = Internal.createIndex("entry_pkey", Entry.ENTRY, new OrderField[] { Entry.ENTRY.ID }, true);
        public static Index ETCH_PKEY = Internal.createIndex("etch_pkey", Etch.ETCH, new OrderField[] { Etch.ETCH.ID }, true);
        public static Index JOURNAL_PKEY = Internal.createIndex("journal_pkey", Journal.JOURNAL, new OrderField[] { Journal.JOURNAL.ID }, true);
        public static Index KEY_PAIR_PKEY = Internal.createIndex("key_pair_pkey", KeyPair.KEY_PAIR, new OrderField[] { KeyPair.KEY_PAIR.ID }, true);
    }
}

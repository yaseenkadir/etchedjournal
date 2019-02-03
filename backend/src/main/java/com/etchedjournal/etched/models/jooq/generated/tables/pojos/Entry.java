/*
 * This file is generated by jOOQ.
 */
package com.etchedjournal.etched.models.jooq.generated.tables.pojos;


import com.etchedjournal.etched.models.OwnerType;

import java.time.Instant;
import java.util.Arrays;

import javax.annotation.Generated;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


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
public class Entry {

    private final String    id;
    private final Instant   timestamp;
    private final byte[]    content;
    private final String    owner;
    private final OwnerType ownerType;
    private final String    journalId;
    private final String    keyPairId;
    private final Integer   version;

    public Entry(Entry value) {
        this.id = value.id;
        this.timestamp = value.timestamp;
        this.content = value.content;
        this.owner = value.owner;
        this.ownerType = value.ownerType;
        this.journalId = value.journalId;
        this.keyPairId = value.keyPairId;
        this.version = value.version;
    }

    public Entry(
        String    id,
        Instant   timestamp,
        byte[]    content,
        String    owner,
        OwnerType ownerType,
        String    journalId,
        String    keyPairId,
        Integer   version
    ) {
        this.id = id;
        this.timestamp = timestamp;
        this.content = content;
        this.owner = owner;
        this.ownerType = ownerType;
        this.journalId = journalId;
        this.keyPairId = keyPairId;
        this.version = version;
    }

    @NotNull
    public String getId() {
        return this.id;
    }

    @NotNull
    public Instant getTimestamp() {
        return this.timestamp;
    }

    @NotNull
    public byte[] getContent() {
        return this.content;
    }

    @NotNull
    @Size(max = 60)
    public String getOwner() {
        return this.owner;
    }

    @NotNull
    public OwnerType getOwnerType() {
        return this.ownerType;
    }

    @NotNull
    public String getJournalId() {
        return this.journalId;
    }

    @NotNull
    public String getKeyPairId() {
        return this.keyPairId;
    }

    @NotNull
    public Integer getVersion() {
        return this.version;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final Entry other = (Entry) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        }
        else if (!id.equals(other.id))
            return false;
        if (timestamp == null) {
            if (other.timestamp != null)
                return false;
        }
        else if (!timestamp.equals(other.timestamp))
            return false;
        if (content == null) {
            if (other.content != null)
                return false;
        }
        else if (!Arrays.equals(content, other.content))
            return false;
        if (owner == null) {
            if (other.owner != null)
                return false;
        }
        else if (!owner.equals(other.owner))
            return false;
        if (ownerType == null) {
            if (other.ownerType != null)
                return false;
        }
        else if (!ownerType.equals(other.ownerType))
            return false;
        if (journalId == null) {
            if (other.journalId != null)
                return false;
        }
        else if (!journalId.equals(other.journalId))
            return false;
        if (keyPairId == null) {
            if (other.keyPairId != null)
                return false;
        }
        else if (!keyPairId.equals(other.keyPairId))
            return false;
        if (version == null) {
            if (other.version != null)
                return false;
        }
        else if (!version.equals(other.version))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((this.id == null) ? 0 : this.id.hashCode());
        result = prime * result + ((this.timestamp == null) ? 0 : this.timestamp.hashCode());
        result = prime * result + ((this.content == null) ? 0 : Arrays.hashCode(this.content));
        result = prime * result + ((this.owner == null) ? 0 : this.owner.hashCode());
        result = prime * result + ((this.ownerType == null) ? 0 : this.ownerType.hashCode());
        result = prime * result + ((this.journalId == null) ? 0 : this.journalId.hashCode());
        result = prime * result + ((this.keyPairId == null) ? 0 : this.keyPairId.hashCode());
        result = prime * result + ((this.version == null) ? 0 : this.version.hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("Entry (");

        sb.append(id);
        sb.append(", ").append(timestamp);
        sb.append(", ").append("[binary...]");
        sb.append(", ").append(owner);
        sb.append(", ").append(ownerType);
        sb.append(", ").append(journalId);
        sb.append(", ").append(keyPairId);
        sb.append(", ").append(version);

        sb.append(")");
        return sb.toString();
    }
}

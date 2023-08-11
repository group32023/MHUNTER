package com.MHunter.mhunter.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Data
@Embeddable
public class IncomeArtistId implements Serializable {
    private int mmid;
    private int eventId;

    public IncomeArtistId() {}
    public IncomeArtistId(int mmid, int eventId) {
        this.mmid = mmid;
        this.eventId = eventId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IncomeArtistId that = (IncomeArtistId) o;
        return mmid == that.mmid && eventId == that.eventId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(mmid, eventId);
    }
}

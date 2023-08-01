package com.MHunter.mhunter.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Data
@Embeddable
public class IncomeArtistId implements Serializable {
    private int artistId;
    private int eventId;

    public IncomeArtistId() {}
    public IncomeArtistId(int artistId, int eventId) {
        this.artistId = artistId;
        this.eventId = eventId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IncomeArtistId that = (IncomeArtistId) o;
        return artistId == that.artistId && eventId == that.eventId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(artistId, eventId);
    }
}

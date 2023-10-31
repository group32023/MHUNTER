package com.MHunter.mhunter.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class RequestMusicMemberId {
    private int MMID;
    @Column(name = "event_id")
    private int eventId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RequestMusicMemberId that = (RequestMusicMemberId) o;
        return MMID == that.MMID && eventId == that.eventId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(MMID, eventId);
    }
}

package com.MHunter.mhunter.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class StaffMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int staffId;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    private String jobRoll;
    @Temporal(TemporalType.TIMESTAMP)
    private Date addedDate;

    public StaffMember() {
    }

    public int getStaffId() {
        return staffId;
    }

    public void setStaffId(int staffId) {
        this.staffId = staffId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getJobRoll() {
        return jobRoll;
    }

    public void setJobRoll(String jobRoll) {
        this.jobRoll = jobRoll;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }
}

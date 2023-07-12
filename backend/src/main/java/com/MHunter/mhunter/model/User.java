package com.MHunter.mhunter.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(name="user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;
    @Column(name="email", length = 255)
    private String email;
    @Column(name="member_type", length = 255)
    private String member_type ;
    @Column(name="password", length = 255)
    private String password;

    public User() {
    }

    public User(int user_id, String email, String member_type, String password) {
        this.user_id = user_id;
        this.email = email;
        this.member_type = member_type;
        this.password = password;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMember_type() {
        return member_type;
    }

    public void setMember_type(String member_type) {
        this.member_type = member_type;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", email='" + email + '\'' +
                ", member_type='" + member_type + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

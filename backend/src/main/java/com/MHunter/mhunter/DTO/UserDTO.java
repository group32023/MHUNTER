package com.MHunter.mhunter.DTO;

public class UserDTO {

    private int userid;
    private String email;
    private String username ;
    private String password;

    public UserDTO() {
    }

    public UserDTO(int userid, String email, String username, String password) {
        this.userid = userid;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "userid=" + userid +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

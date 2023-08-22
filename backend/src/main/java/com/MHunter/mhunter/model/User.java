package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
    private String password;
    private String regDate;
    private int isVerified;
    private int removeStaffId;
    private String removeDate;
    private int suspendedStaffId;
    private String suspendedDate;
    private String remark;
    @Transient
    private MultipartFile Image;

    private String imagePath;







    public User() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRegDate() {
        return regDate;
    }

    public void setRegDate(String regDate) {
        this.regDate = regDate;
    }

    public int getIsVerified() {
        return isVerified;
    }

    public void setIsVerified(int isVerified) {
        this.isVerified = isVerified;
    }

    public int getRemoveStaffId() {
        return removeStaffId;
    }

    public void setRemoveStaffId(int removeStaffId) {
        this.removeStaffId = removeStaffId;
    }

    public String getRemoveDate() {
        return removeDate;
    }

    public void setRemoveDate(String removeDate) {
        this.removeDate = removeDate;
    }

    public int getSuspendedStaffId() {
        return suspendedStaffId;
    }

    public void setSuspendedStaffId(int suspendedStaffId) {
        this.suspendedStaffId = suspendedStaffId;
    }

    public String getSuspendedDate() {
        return suspendedDate;
    }

    public void setSuspendedDate(String suspendedDate) {
        this.suspendedDate = suspendedDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public MultipartFile getImage() {
        return Image;
    }

    public void setImage(MultipartFile image) {
        Image = image;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }


}

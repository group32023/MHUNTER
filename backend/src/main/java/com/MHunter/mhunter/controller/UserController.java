package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.exception.UserNotFoundException;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.StaffMember;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.*;
import com.MHunter.mhunter.service.MusicMemberService;
import com.MHunter.mhunter.service.OrganizerService;
import com.MHunter.mhunter.service.StaffMemberService;
import com.MHunter.mhunter.service.UserService;
import com.MHunter.mhunter.struct.AllUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin (origins = "*")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MusicMemberRepository musicMemberRepository;
    @Autowired
    private ArtistRepository artistRepository;
    @Autowired
    private BandRepository bandRepository;
    @Autowired
    private StaffMemberRepository staffMemberRepository;
    @Autowired
    private OrganizerRepository organizerRepository;


    @Autowired
    private UserService userService;

    @Autowired
    private MusicMemberService musicMemberService;

    @Autowired
    private OrganizerService organizerService;

    @Autowired
    private StaffMemberService staffMemberService;

    @GetMapping("/allUsers")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/view")
    public List<AllUsers> viewAll(){
        List<MusicMember> artistBandLists = musicMemberService.viewMusicMembers();
        List<Organizer> organizerList = organizerService.findAllOrganizer();
        List<StaffMember> staffMembers = staffMemberService.findAllStaffMembers();
        List<AllUsers> allUsersList = new ArrayList<>();
        artistBandLists.forEach(item ->{
            if(item.getUser().getIsVerified()==0) {
                AllUsers allUsers = new AllUsers();
                allUsers.setName(item.getName());
                allUsers.setImagePath(item.getUser().getImagePath());
                allUsers.setFirstName(item.getUser().getFirstName());
                allUsers.setLastName(item.getUser().getLastName());
                allUsers.setType(item.getType());
                allUsers.setId(item.getUser().getUserId());
                allUsers.setStatus("Pending");
                allUsersList.add(allUsers);
            }
        });
        organizerList.forEach(item -> {
            if(item.getUser().getIsVerified()==0) {
                AllUsers allUsersO = new AllUsers();
                allUsersO.setName(item.getUser().getFirstName());
                allUsersO.setFirstName(item.getUser().getFirstName());
                allUsersO.setLastName(item.getUser().getLastName());
                allUsersO.setImagePath(item.getUser().getImagePath());
                allUsersO.setType("Organizer");
                allUsersO.setId(item.getUser().getUserId());
                allUsersO.setStatus("Pending");
                allUsersList.add(allUsersO);
            }
        });
        staffMembers.forEach(item -> {
            if(item.getUser().getIsVerified()==0) {
                AllUsers allUsersS = new AllUsers();
                allUsersS.setName(item.getUser().getFirstName());
                allUsersS.setType(item.getJobRoll());
                allUsersS.setImagePath(item.getUser().getImagePath());
                allUsersS.setId(item.getUser().getUserId());
                allUsersS.setStatus("Pending");
                allUsersList.add(allUsersS);
            }
        });
        return allUsersList;
    }

    @GetMapping("/user/{userId}")
    User getUserById(@PathVariable int userId) {

        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
    }

    @GetMapping("/musicUser/{userId}")
    MusicMember getMusicUserById(@PathVariable int userId) {
        return musicMemberService.findSpecificMusicMemberByUserID(userId);
    }

    @PutMapping("/user/{userId}")
    User updateUser(@RequestBody User newUser, @PathVariable int userId) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.setAddress(newUser.getAddress());
                    user.setPhoneNumber(newUser.getPhoneNumber());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(userId));
    }

    @PutMapping("/userStatus/{userId}")
    User updateUserStatus( @PathVariable int userId) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setIsVerified(1);
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(userId));
    }

    /*@DeleteMapping("/user/{userId}")
    String deleteUser(@PathVariable int userId){
        if(!userRepository.existsById(userId)) {
            throw new UserNotFoundException(userId);
        }

        artistRepository.deleteByUserId(userId); // Assuming deleteByUserId method is implemented in artistRepository
        musicMemberRepository.deleteByUserId(userId); // Assuming deleteByUserId method is implemented in musicMemberRepository
        userRepository.deleteById(userId);
        return  "User with id "+userId+" has been deleted success.";
    }*/
    @DeleteMapping("/user/{userId}")
    public ResponseEntity<String>  deleteUserById(@PathVariable int userId){
        String msg = "User with ID " + userId + " has been deleted";
        return ResponseEntity.ok(msg);
    }

    @GetMapping("/viewSpecificUser/{id}")
    public User viewSpecificUser(@PathVariable int id){
        return userService.findSpecificUser(id);

    }

    @GetMapping("/countBandAndArtist")
    public List<Object[]> getCountOfBandAndArtist() {
        return musicMemberService.getCountOfBandAndArtist();
    }

    @GetMapping("/getAdminReportData")
    public List<Object[]> getAdminReportData(){
        return userService.getAdminReportData();
    }


}

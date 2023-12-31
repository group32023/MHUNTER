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
import com.MHunter.mhunter.struct.UserArtist;
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
    @GetMapping("/orgnizer/view/verified")
    public List<UserArtist> getOrganizers(){
        List<Organizer> organizersList = organizerService.findAllOrganizer();
        List<UserArtist> UsersList = new ArrayList<>();
        organizersList.forEach(item ->{
            if(item.getUser().getIsVerified()==1) {
                UserArtist allUserOrg = new UserArtist();
                allUserOrg.setImgPath(item.getUser().getImagePath());
                allUserOrg.setFirstName(item.getUser().getFirstName());
                allUserOrg.setLastName(item.getUser().getLastName());
                allUserOrg.setEmail(item.getUser().getEmail());
                allUserOrg.setAddress(item.getUser().getAddress());
                allUserOrg.setType("Organizer");
                allUserOrg.setId(item.getUser().getUserId());
                UsersList.add(allUserOrg);
            }
        });
        return UsersList;

    }

    @GetMapping("/moderator/view/verified")
    public List<UserArtist> getModerators(){
        List<StaffMember> staffMembersList = staffMemberService.findAllStaffMembers();
        List<UserArtist> ModeratorsList = new ArrayList<>();
        staffMembersList.forEach(item ->{
            if("Moderator".equals(item.getJobRoll())) {
                UserArtist allUserM = new UserArtist();
                allUserM.setImgPath(item.getUser().getImagePath());
                allUserM.setFirstName(item.getUser().getFirstName());
                allUserM.setLastName(item.getUser().getLastName());
                allUserM.setEmail(item.getUser().getEmail());
                allUserM.setAddress(item.getUser().getAddress());
                allUserM.setType("Moderator");
                allUserM.setId(item.getUser().getUserId());
                ModeratorsList.add(allUserM);
            }
        });
        return ModeratorsList;

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

    @GetMapping("/musicUser/{userId}")
    MusicMember getMusicUserById(@PathVariable int userId) {
        return musicMemberService.findSpecificMusicMemberByUserID(userId);
    }

    @GetMapping("/user/{userId}")
    User getUserById(@PathVariable int userId) {

        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
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

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable int userId) {
        if (!userRepository.existsById(userId)) {
            throw new UserNotFoundException(userId);
        }
        userRepository.deleteById(userId);
        return ResponseEntity.ok("User with id " + userId + " has been deleted successfully.");
    }
   /* @DeleteMapping("/user/{userId}")
    public ResponseEntity<String>  deleteUserById(@PathVariable int userId){
        String msg = "User with ID " + userId + " has been deleted";
        return ResponseEntity.ok(msg);
    }*/

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


    @GetMapping("/organizer/{userId}")
    Organizer getOrgById(@PathVariable int userId) {
        return organizerService.findSpecificOrganizerByUserID(userId);
    }

}

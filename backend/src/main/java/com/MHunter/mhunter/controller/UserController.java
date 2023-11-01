package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.exception.UserNotFoundException;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.StaffMember;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.UserRepository;
import com.MHunter.mhunter.service.MusicMemberService;
import com.MHunter.mhunter.service.OrganizerService;
import com.MHunter.mhunter.service.StaffMemberService;
import com.MHunter.mhunter.service.UserService;
import com.MHunter.mhunter.struct.AllUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin (origins = "*")
public class UserController {
    @Autowired
    private UserRepository userRepository;

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
            AllUsers allUsers = new AllUsers();
            allUsers.setName(item.getName());
            allUsers.setImagePath(item.getUser().getImagePath());
            allUsers.setFirstName(item.getUser().getFirstName());
            allUsers.setLastName(item.getUser().getLastName());
            allUsers.setType(item.getType());
            allUsers.setId(item.getUser().getUserId());
            if(item.getUser().getIsVerified()==1){
                allUsers.setStatus("Registered");
            }
            else {
                allUsers.setStatus("Pending");
            }
            allUsersList.add(allUsers);
        });
        organizerList.forEach(item ->{
            AllUsers allUsersO = new AllUsers();
            allUsersO.setName(item.getUser().getFirstName());
            allUsersO.setFirstName(item.getUser().getFirstName());
            allUsersO.setLastName(item.getUser().getLastName());
            allUsersO.setImagePath(item.getUser().getImagePath());
            allUsersO.setType("Organizer");
            allUsersO.setId(item.getUser().getUserId());
            if(item.getUser().getIsVerified()==1){
                allUsersO.setStatus("Registered");
            }
            else {
                allUsersO.setStatus("Pending");
            }
            allUsersList.add(allUsersO);
        });
        staffMembers.forEach(item ->{
            AllUsers allUsersS = new AllUsers();
            allUsersS.setName(item.getUser().getFirstName());
            allUsersS.setType(item.getJobRoll());
            allUsersS.setImagePath(item.getUser().getImagePath());
            allUsersS.setId(item.getUser().getUserId());
            if(item.getUser().getIsVerified()==1){
                allUsersS.setStatus("Registered");
            }
            else {
                allUsersS.setStatus("Pending");
            }
            allUsersList.add(allUsersS);
        });
        return allUsersList;
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
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(userId));
    }

    @DeleteMapping("/user/{userId}")
    String deleteUser(@PathVariable int userId){
        if(!userRepository.existsById(userId)){
            throw new UserNotFoundException(userId);
        }
        userRepository.deleteById(userId);
        return  "User with id "+userId+" has been deleted success.";
    }

    @GetMapping("/viewSpecificUser/{id}")
    public User viewSpecificUser(@PathVariable int id){
        return userService.findSpecificUser(id);

    }

    @GetMapping("/countBandAndArtist")
    public List<Object[]> getCountOfBandAndArtist() {
        return musicMemberService.getCountOfBandAndArtist();
    }

    @GetMapping("/organizer/{userId}")
    MusicMember getOrgById(@PathVariable int userId) {
        return musicMemberService.findSpecificOrganizerByUserID(userId);
    }

}

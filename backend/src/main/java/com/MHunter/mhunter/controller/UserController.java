package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.exception.UserNotFoundException;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.ArtistRepository;
import com.MHunter.mhunter.repository.BandRepository;
import com.MHunter.mhunter.repository.OrganizerRepository;
import com.MHunter.mhunter.repository.UserRepository;
import com.MHunter.mhunter.service.*;
import com.MHunter.mhunter.struct.AllUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArtistService artistService;

    @Autowired
    private BandService bandService;

    @Autowired
    private UserService userService;

    @Autowired
    private MusicMemberService musicMemberService;

    @Autowired
    private OrganizerService organizerService;


    @Autowired
    private OrganizerRepository organizerRepository;

    @Autowired
    private ArtistRepository artistRepository;
    @Autowired
    private BandRepository bandRepository;

    @GetMapping("/allUsers")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/view")
    public List<AllUsers> viewAll(){
        List<MusicMember> artistBandLists = musicMemberService.viewMusicMembers();
        List<Organizer> organizerList = organizerService.findAllOrganizer();
        List<AllUsers> allUsersList = new ArrayList<>();
        artistBandLists.forEach(item ->{
            AllUsers allUsers = new AllUsers();
            allUsers.setName(item.getName());
            allUsers.setImagePath(item.getUser().getImagePath());
            allUsers.setFirstName(item.getUser().getFirstName());
            allUsers.setLastName(item.getUser().getLastName());
            allUsers.setType(item.getType());
            allUsersList.add(allUsers);
        });
        /*List<Band> bandList = bandService.viewAllBands();
        bandList.forEach(item ->{
            MusicMember musicMember = musicMemberService.findSpecificMusicMember(item.getMusicMember().getMMID());
            //if(musicMember.getType().equals("Artist")){
            AllUsers allUsers = new AllUsers();
            allUsers.setName(musicMember.getName());
            allUsers.setImagePath(item.getUser().getImagePath());
            allUsers.setType(musicMember.getType());

            allUsersList.add(allUsers);
            //}
        });*/
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

    @GetMapping("/getAdminReportData")
    public List<Object[]> getAdminReportData(){
        return userService.getAdminReportData();
    }


    @GetMapping("/organizer/{userId}")
    Organizer getOrgById(@PathVariable int userId) {
        return organizerService.findSpecificOrganizerByUserID(userId);
    }

}

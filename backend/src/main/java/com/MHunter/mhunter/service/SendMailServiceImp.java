package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.User;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.time.Duration;


@Service
public class SendMailServiceImp implements SendMailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private OrganizerService organizerService;
    @Autowired
    private EventService eventService;
    @Autowired
    private MusicMemberService musicMemberService;
    @Override
    public void sendMail(int orgId,int eventId,int mmid) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo("kasungayashan396@gmail.com");
        helper.setSubject("Confirmation of Artist/Band Acceptance for "+"eventName");
        String htmlTemplate=
                "\n" +
                "Dear [Organizer's Name],\n" +
                "\n" +
                "I am thrilled to inform you that [Artist/Band Name] has officially accepted your event request! We are excited to be a part of [Event Name] and can't wait to bring our music to your audience.\n" +
                "\n" +
                "Here are the key details for our participation in your event:\n" +
                "\n" +
                "Event Details:\n" +
                "\n" +
                "    Event Name: [Event Name]\n" +
                "    Date: [Event Date]\n" +
                "    Time: [Event Time]\n" +
                "    Venue: [Event Venue]\n" +
                "\n" +
                "Performance Details:\n" +
                "\n" +
                "    Performance Time: [Artist/Band Performance Time]\n" +
                "    Set Duration: [Artist/Band Set Duration]\n" +
                "\n" +
                "Please rest assured that we are dedicated to delivering an outstanding performance and making your event a memorable one for all attendees. Our team will coordinate closely with your event organizers to ensure a smooth and successful collaboration.\n" +
                "\n" +
                "If there are any specific requirements or additional details you would like to discuss, please feel free to reach out to us at [Artist/Band Contact Email] or [Artist/Band Contact Phone Number]. We are here to ensure that all aspects of our participation are aligned with your event's vision.\n" +
                "\n" +
                "Thank you for choosing [Artist/Band Name] for your event. We look forward to creating a fantastic experience for your audience, and we appreciate the opportunity to be a part of [Event Name].\n" +
                "\n" +
                "Warm regards,\n" +
                "\n" +
                "[Your Name]\n" +
                "[Artist/Band Name]\n" +
                "[Artist/Band Contact Email]\n" +
                "[Artist/Band Contact Phone Number]";


        Organizer organizer = organizerService.findSpecificOrganizer(orgId);
        Event event = eventService.viewSpecificEvent(eventId);
        MusicMember musicMember = musicMemberService.findSpecificMusicMember(mmid);

        Duration duration = Duration.between(event.getStart_time(), event.getEnd_time());
        long seconds = duration.getSeconds();

        htmlTemplate = htmlTemplate.replace("[Organizer's Name]", organizer.getUser().getFirstName());
        htmlTemplate = htmlTemplate.replace("[Artist/Band Name]", musicMember.getName());
        htmlTemplate = htmlTemplate.replace("[Event Name]", event.getEvent_name());
        htmlTemplate = htmlTemplate.replace("[Event Date]", event.getDate().toString());
        htmlTemplate = htmlTemplate.replace("[Event Time]", event.getStart_time().toString());
        if(event.getTown() != null) {
            htmlTemplate = htmlTemplate.replace("[Event Venue]", event.getTown());
        }
        htmlTemplate = htmlTemplate.replace("[Artist/Band Performance Time]", event.getStart_time().toString());
        htmlTemplate = htmlTemplate.replace("[Artist/Band Set Duration]",  String.valueOf(seconds));
        htmlTemplate = htmlTemplate.replace("[Artist/Band Contact Email]", musicMember.getUser().getEmail());
        htmlTemplate = htmlTemplate.replace("[Artist/Band Contact Phone Number]", musicMember.getUser().getPhoneNumber());
        htmlTemplate = htmlTemplate.replace("[Artist/Band Name]", musicMember.getName());
        htmlTemplate = htmlTemplate.replace("[Artist/Band Contact Email]", musicMember.getUser().getEmail());
        htmlTemplate = htmlTemplate.replace("[Artist/Band Contact Phone Number]", musicMember.getUser().getPhoneNumber());
        htmlTemplate = htmlTemplate.replace("[Your Name]", "N.D.K. Susil");
        helper.setText(htmlTemplate);



        javaMailSender.send(message);

        System.out.println("Send Mail");
    }
}

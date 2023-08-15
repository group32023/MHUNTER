/*package com.MHunter.mhunter.exception;
import org.springframework.session.Session;
import org.springframework.session.SessionRepository;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Component;

@Component
public class SessionUtil {
    private final SessionRepository<?> sessionRepository;

    public SessionUtil(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public void storeUserIdInSession(Long userId) {
        ServerProperties.Reactive.Session session = sessionRepository.createSession();
        session.setAttribute("userId", userId);
        sessionRepository.save(session);
    }

    public Long getUserIdFromSession() {
        Session session = sessionRepository.findById(
                SecurityContextHolder.getContext().getAuthentication().getName());
        return session.getAttribute("userId");
    }
}*/

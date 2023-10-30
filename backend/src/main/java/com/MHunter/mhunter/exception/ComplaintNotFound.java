package com.MHunter.mhunter.exception;

public class ComplaintNotFound extends Exception{
    public ComplaintNotFound() {
        super();
    }

    public ComplaintNotFound(String message) {
        super(message);
    }

    public ComplaintNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public ComplaintNotFound(Throwable cause) {
        super(cause);
    }

    protected ComplaintNotFound(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}

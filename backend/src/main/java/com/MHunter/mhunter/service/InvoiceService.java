package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.model.RequestMusicMember;

public interface InvoiceService {
    public Invoice saveInvoice(Invoice data);

    public int getInvoiceIdForEvent(int mmid, int eventid);

}

package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;

import java.util.Optional;

public interface InvoiceService {
    public Invoice saveInvoice(Invoice data);

    public int getInvoiceIdForEvent(int mmid, int eventid);

    public Invoice getAllInInvoice(int mmid, int eventid);

    public Invoice getAllInInvoiceById(int invoiceId);

}

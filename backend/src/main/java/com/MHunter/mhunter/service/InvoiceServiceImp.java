package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InvoiceServiceImp implements InvoiceService {
    @Autowired
    private InvoiceRepository invoiceRepository;
    @Override
    public Invoice saveInvoice(Invoice data) {
        return invoiceRepository.save(data);

    }

    @Override
    public int getInvoiceIdForEvent(int mmid, int eventid) {
        return invoiceRepository.getInvoiceId(mmid,eventid);
    }

    @Override
    public Invoice getAllInInvoice(int mmid, int eventid) {
        return invoiceRepository.findByMmidAndEventid(mmid,eventid);
    }

    @Override
    public Invoice getAllInInvoiceById(int invoiceId) {
        return invoiceRepository.findByInvoiceId(invoiceId);
    }
}

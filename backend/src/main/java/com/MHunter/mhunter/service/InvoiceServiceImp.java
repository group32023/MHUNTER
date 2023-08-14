package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImp implements InvoiceService {
    @Autowired
    private InvoiceRepository invoiceRepository;
    @Override
    public Invoice saveInvoice(Invoice data) {
        return invoiceRepository.save(data);

    }
}

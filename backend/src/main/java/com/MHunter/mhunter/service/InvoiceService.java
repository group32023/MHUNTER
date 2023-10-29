package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.model.InvoiceDataDTO;

import java.util.List;

public interface InvoiceService {
    public Invoice saveInvoice(Invoice data);
    public Invoice findSpecificInvoice(int id);
    public List<InvoiceDataDTO> findSpecificInvoiceByArtistId(int id);
    public  Invoice updatePaidAmount(int id, Long newPaidAmount);
}

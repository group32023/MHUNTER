package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.model.InvoiceDataDTO;
import com.MHunter.mhunter.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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
    public Invoice findSpecificInvoice(int id) {
        Optional<Invoice> invoice = invoiceRepository.findById(id);
        return invoice.orElse(null);
    }

    @Override
    public List<InvoiceDataDTO> findSpecificInvoiceByArtistId(int id) {
        List<Object[]> results = invoiceRepository.findByArtistId(id);
        List<InvoiceDataDTO> dataList = new ArrayList<>();

        for (Object[] row : results) {
            Integer artistId = (Integer) row[0];
            Double artistFee = (Double) row[1];
            String paymentType=(String) row[2];
            Integer organizerId= (Integer) row[3];
            Integer invoiceId= (Integer) row[4];
            InvoiceDataDTO data = new InvoiceDataDTO(artistId, artistFee, paymentType,organizerId,invoiceId);
            dataList.add(data);
        }

        return dataList;
    }
    public Invoice updatePaidAmount(int invoiceId, Long newPaidAmount) {
        Optional<Invoice> optionalInvoice = invoiceRepository.findById(invoiceId);

        if (optionalInvoice.isPresent()) {
            Invoice invoice = optionalInvoice.get();
            invoice.setPaidAmount(newPaidAmount);
            return invoiceRepository.save(invoice); // Save and return the updated invoice
        } else {
            throw new IllegalArgumentException("Invalid Invoice ID");
        }
    }


}

package com.MHunter.mhunter.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class InvoiceDataDTO {
    private int artist_id;
    private Double totalAmount;
    private String paymentType;
    private int org_Id;
    private int invoiceId;
}

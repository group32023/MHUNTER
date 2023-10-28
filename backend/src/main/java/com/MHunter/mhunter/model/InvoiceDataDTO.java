package com.MHunter.mhunter.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class InvoiceDataDTO {
    private int artist_id;
    private Double artistFee;
    private String paymentType;
    private int org_Id;
    private int invoiceId;
}

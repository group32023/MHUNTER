package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {

    @Query(value = "SELECT invoice_id FROM invoice WHERE mmid = :mmid and eventid= :eventid", nativeQuery = true)
    int getInvoiceId(@Param("mmid") int mmid, @Param("eventid") int eventid);
}

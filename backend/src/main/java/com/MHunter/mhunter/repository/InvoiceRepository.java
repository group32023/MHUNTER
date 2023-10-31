package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.model.InvoiceDataDTO;
import jakarta.persistence.SqlResultSetMapping;
import jakarta.persistence.Tuple;
import org.hibernate.annotations.NamedNativeQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {
    Invoice findByInvoiceId(Integer invoice_id);

    @Query(value = "SELECT artist.artist_id , invoice.total_amount ,invoice.payment_type, booked_list.org_Id, invoice.invoice_id FROM artist INNER JOIN booked_list ON artist.mmid = booked_list.mmid INNER JOIN invoice ON booked_list.invoice_id = invoice.invoice_id WHERE artist.artist_id=:artistId", nativeQuery = true)
    List<Object[]> findByArtistId(Integer artistId);


    @Query(value = "SELECT invoice_id FROM invoice WHERE mmid = :mmid and eventid= :eventid", nativeQuery = true)
    int getInvoiceId(@Param("mmid") int mmid, @Param("eventid") int eventid);
}

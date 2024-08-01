package com.inline.purchase.repos;

import com.inline.purchase.models.Lot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LotRepository extends JpaRepository<Lot, Long> {

}

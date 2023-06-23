package com.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kyn.entity.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {
	
	Store findByUsername(String username);
}


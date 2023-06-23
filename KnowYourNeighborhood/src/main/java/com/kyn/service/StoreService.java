package com.kyn.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyn.entity.Store;
import com.kyn.repository.StoreRepository;

@Service("StoreService")
@Transactional
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;

    public String saveStore(Store store) {
        storeRepository.save(store);
        return "Store added successfully";
    }
    
	public List<Store> showAllStores() {
		return storeRepository.findAll();
	}
}


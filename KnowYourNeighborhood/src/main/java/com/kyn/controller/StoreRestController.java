package com.kyn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.entity.Store;
import com.kyn.service.StoreService;

@RestController
public class StoreRestController {

	@Autowired
	StoreService storeService;
	
	@PostMapping("/add-store")
	@CrossOrigin(origins = "http://localhost:3000")
	public String addNewStore(@RequestBody Store store) {
	    storeService.saveStore(store);
	    System.out.println(store);
	    System.out.println("Store successfully added.");
	    return "Store successfully added.";
	}
	
    @GetMapping("/all_stores")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Store> showAllStores() {
        List<Store> stores = storeService.showAllStores();
        System.out.print(stores);
        return stores;
    }
}

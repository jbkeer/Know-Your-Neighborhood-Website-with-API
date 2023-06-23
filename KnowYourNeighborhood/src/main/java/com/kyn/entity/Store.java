package com.kyn.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="store")
public class Store {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	private String store_name;
	private String locality;
	private String username;
	private String phone_number;
	
	public Store() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Store(Long id, String store_name, String locality, String username, String phone_number) {
		super();
		this.id = id;
		this.store_name = store_name;
		this.locality = locality;
		this.username = username;
		this.phone_number = phone_number;
	}

	@Override
	public String toString() {
		return "Store [id=" + id + ", store_name=" + store_name + ", locality=" + locality + ", username=" + username
				+ ", phone_number=" + phone_number + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStore_name() {
		return store_name;
	}

	public void setStore_name(String store_name) {
		this.store_name = store_name;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	
	
}

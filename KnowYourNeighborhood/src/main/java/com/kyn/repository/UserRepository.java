package com.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kyn.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	@Query(value="SELECT * FROM user WHERE :email = email AND :password = password",
			 nativeQuery = true)
	public User login(@Param("email") String email, @Param("password") String password);
	
    User findByEmail(String email);

    User findByName(String name);
}
package com.kyn.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kyn.entity.User;
import com.kyn.repository.UserRepository;

@Service("UserService")
@Transactional
public class UserService{

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String saveUser(User user) {
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		userRepository.save(user);
		
		return "User saved successfully";
	}

	public User login(String email, String password) {
		User logUser = userRepository.login(email, password);
		return logUser;
	}
	
	public boolean userExists(String email, String password) {
		User user = userRepository.findByEmail(email);
		if (user != null && passwordEncoder.matches(password, user.getPassword())) {
			return true;
		}
			return false;
	}

	public Optional<User> getUserInfo(long uid) {
		return userRepository.findById(uid);
	}
	
	public List<User> showAllUser() {
		return userRepository.findAll();
	}
}

package com.kyn.security;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
@EnableOAuth2Sso
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
      http
        .csrf().disable()
	        .authorizeRequests()
	        .antMatchers("/login").permitAll()
	        .antMatchers("/", "/login**", "/webjars/**", "/error**", "/register**", "/all_users", "/user", "/sign_in", "/add-store", "/all_stores").permitAll()
	        .antMatchers("/styles/**").permitAll()
	        .antMatchers("/images/**").permitAll()
	        .anyRequest().authenticated()
	    .and()
            .cors()
        .and()
			.logout()
			.logoutUrl("/logout")
			.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
	        .logoutSuccessUrl("/")
	        .invalidateHttpSession(true)
	        .clearAuthentication(true)
	        .deleteCookies("JSESSIONID")
	      	.permitAll();
    }
}
package com.needy.needypart.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class Needy {
	
	@Id
	private String username;
	private String Password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public Needy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Needy(String username, String password) {
		super();
		this.username = username;
		Password = password;
	}
	@Override
	public String toString() {
		return "Needy [username=" + username + ", Password=" + Password + "]";
	}
	
	
	

}

package com.needy.needypart.Controller;



import java.util.List;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.needy.needypart.Service.LoginService;
import com.needy.needypart.Service.NeedyService;
import com.needy.needypart.model.Donation;
import com.needy.needypart.model.Needy;
import com.needy.needypart.model.Request;


@CrossOrigin(allowedHeaders="*",origins="*")
@RestController
@RequestMapping("/api/v1")
public class NeedyController {
	
	@Autowired
	private NeedyService needyservice;
	
	@Autowired
	private LoginService loginservice;
	
	@GetMapping("/getdonations")
	public List<Donation> getDonations(){
		return needyservice.getDonations();
	
			
	}
	
	@DeleteMapping("/deleteDonation/{dId}")
	public void deleteDonation(@PathVariable Integer dId) {
		needyservice.deleteDonation(dId);
		
		
	}
	
	@GetMapping("/login/auth/{name}")
	public ResponseEntity<Needy> login(@PathVariable String name){
		Optional<Needy> cat = loginservice.login(name);
		return cat.map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound()
						.build());
	}
	
	@PostMapping("/addrequest")
	public Request addrequest(@RequestBody Request request) {
		return needyservice.addrequest(request);
		
	}
	@GetMapping("/getrequests")
	public List<Request> getRequest(){
		return needyservice.getRequest();
	
	
	}
	
}
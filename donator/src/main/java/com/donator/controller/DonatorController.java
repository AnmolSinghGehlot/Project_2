package com.donator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.donation.model.Donation;
import com.donation.service.DonationService;
@RestController
public class DonatorController {
	private DonationService donationService;
	
	@Autowired
	public DonatorController(DonationService donationService) {
		super();
		this.donationService = donationService;
	}
	@RequestMapping(value="/donation",method=RequestMethod.POST)
	public Donation addDonation(@RequestBody Donation donation)
	{
		//System.out.println("hii");
		return donationService.addDonation(donation);
		
	}
	

}

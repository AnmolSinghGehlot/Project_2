package com.donation.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.donation.model.Donation;
import com.donation.service.DonationService;

@RestController
public class DonatorController {
	
	private DonationService dsi;
	@Autowired
	public DonatorController(DonationService dsi) {
		super();
		this.dsi = dsi;
	}
	@RequestMapping(value = "/donation",method = RequestMethod.POST)
	public Donation createDonation(@RequestBody Donation donation) {
		return dsi.createDonation(donation);
	}
	@RequestMapping(value="/donations",method = RequestMethod.GET)
	public List<Donation> getDonation(){
		return dsi.getDonations();
	}
	@RequestMapping(value="/donation/{dId}",method = RequestMethod.GET)
	public Donation getDonationById(@PathVariable("dId") int dId){
		Optional<Donation> donation = dsi.getDonationById(dId);
		return donation.get();
	}
	@RequestMapping(value ="/donation/update",method = RequestMethod.PUT)
	public Donation updateDonation(@RequestBody Donation donation) {
		return dsi.updateDonation(donation);
	}
	
	@RequestMapping(value="/donation/delete/{dId}", method = RequestMethod.DELETE)
	public String deleteDonation(@PathVariable("dId") int dId) {
		dsi.deleteDonation(dId);
		if(dsi.getDonationById(dId).isPresent()) {
			return "The donation is not deleted";
			
		}
		return "The donation details got deleted";
	}
	
	

}

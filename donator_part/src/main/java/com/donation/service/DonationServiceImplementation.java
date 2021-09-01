package com.donation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donation.model.Donation;
import com.donation.repository.DonationRepository;
@Service
public class DonationServiceImplementation implements DonationService{
	
	private DonationRepository donationRespository;
		
	@Autowired
	public DonationServiceImplementation(DonationRepository donationRespository) {
		super();
		this.donationRespository = donationRespository;
	}
	public Donation createDonation(Donation customer) {
		return donationRespository.save(customer);
	}
	@Override
	public List<Donation> getDonations() {
		return donationRespository.findAll();
	}
	@Override
	public Optional<Donation> getDonationById(int dId) {
		return donationRespository.findById(dId);
	}
	@Override
	public Donation updateDonation(Donation donation) {
		return donationRespository.save(donation);
	}
	@Override
	public void deleteDonation(int dId) {
		donationRespository.deleteById(dId);
		
	}
	
}

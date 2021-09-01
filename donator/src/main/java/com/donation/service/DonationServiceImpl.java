package com.donation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donation.model.Donation;
import com.donation.repository.DonationRepository;
@Service
public class DonationServiceImpl implements DonationService {
	private DonationRepository donationRepository;
	@Autowired
	public DonationServiceImpl(DonationRepository donationRepository) {
		super();
		this.donationRepository = donationRepository;
	}
	@Override
	public Donation addDonation(Donation donation) {
	
		return donationRepository.save(donation);
	}

}

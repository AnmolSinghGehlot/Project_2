package com.needy.needypart.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.needy.needypart.model.Needy;

@Repository
public interface LoginRepository extends JpaRepository<Needy, Integer>{
	
	Optional<Needy> findByUsername(String name);

}

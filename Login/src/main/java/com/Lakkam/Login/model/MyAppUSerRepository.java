package com.Lakkam.Login.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MyAppUSerRepository  extends JpaRepository<MyAppUser,Long> {
    Optional<MyAppUser> findByEmail(String email);
}

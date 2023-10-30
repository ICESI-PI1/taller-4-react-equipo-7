package com.icesi.bookmanager.repository.persistence;

import com.icesi.bookmanager.repository.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
}

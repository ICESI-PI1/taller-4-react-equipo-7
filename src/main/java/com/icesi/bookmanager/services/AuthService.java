package com.icesi.bookmanager.services;

import com.icesi.bookmanager.repository.model.Role;
import com.icesi.bookmanager.repository.model.User;
import com.icesi.bookmanager.repository.persistence.UserRepository;
import com.icesi.bookmanager.requests.AuthResponse;
import com.icesi.bookmanager.requests.LoginRequest;
import com.icesi.bookmanager.requests.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final  PasswordEncoder passwordEncoder;

    public AuthResponse register(RegisterRequest request) {
        var encodedPassword = passwordEncoder.encode(request.getPassword());

        var user = User.builder()
                .username(request.getUsername())
                .password(encodedPassword)
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .role((Role.USER))
                .build();


        userRepository.save(user);



        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();


    }

    public AuthResponse login(LoginRequest request) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword()));

        UserDetails user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);

        return AuthResponse.builder()
                .token(token)
                .build();
    }
}

package com.Lakkam.Login.model;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
@AllArgsConstructor
public class MyAppUserService implements UserDetailsService {
    private final  MyAppUSerRepository myAppUserRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<MyAppUser> user=myAppUserRepository.findByEmail(email);
        if(user.isPresent()) {
            var userObj=user.get();
            return User.builder()
                    .username(userObj.getUsername())
                    .password(userObj.getPassword())
                    .build();
        }else{
            throw new UsernameNotFoundException(email);
        }
    }
}

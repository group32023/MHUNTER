package com.MHunter.mhunter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;

@ComponentScan(basePackages = {"com.MHunter.mhunter", "com.MHunter.mhunter.config"})
@PropertySource("classpath:application.properties")
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class MhunterApplication {

	public static void main(String[] args) {
		SpringApplication.run(MhunterApplication.class, args);
	}

}

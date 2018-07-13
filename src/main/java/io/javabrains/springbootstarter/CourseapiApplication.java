package io.javabrains.springbootstarter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("io.javabrains.springbootstarter")
public class CourseapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseapiApplication.class, args);
	}
}

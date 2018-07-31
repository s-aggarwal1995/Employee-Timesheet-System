package io.javabrains.springbootstarter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@ComponentScan("io.javabrains.springbootstarter")
@PropertySource("application.properties")
public class CourseapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseapiApplication.class, args);
	}
}

package springlecture.springbootsecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration // 스프링 설정 클래스임을 알리는 어노테이션
@EnableWebSecurity // 해당 클래스에서 spring security 를 사용하기 위한 어노테이션
public class WebSecurityConfig {
    
    @Bean // 메소드에 다는 어노테이션. 스프링 컨테이너가 관리할 수 있도록 등록
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // 예외 처리를 필수로 진행할 수 있어야 함.
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/auth/**").permitAll()
                .anyRequest().authenticated() // 위에 걸러지지 않은 api 는 모두 인증을 필요로 함.
                // .permitAll() : 인증 X 접근 가능
                // .hasRole("admin") : 특정 role 이 있어야 접근 가능 (ex. admin)
                // .hasAnyRole("admin", "teacher") : 파라미터로 넘긴 role 중 하나를 만족
            );

        return http.build();
    }

}

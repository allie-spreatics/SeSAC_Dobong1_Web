package springlecture.springbootsecurity.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import springlecture.springbootsecurity.config.jwt.JwtProperties;
import springlecture.springbootsecurity.entity.UserEntity;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Component
public class TokenProvider {
    @Autowired
    private JwtProperties jwtProperties;

    public String create(UserEntity user) {
        Date expiredDate
            = Date.from(Instant.now().plus(1, ChronoUnit.DAYS));

        return Jwts.builder()
            .signWith(SignatureAlgorithm.HS512, jwtProperties.getSecretKey())
            .setSubject(String.valueOf(user.getId()))
            .setIssuer(jwtProperties.getIssuer())
            .setExpiration(expiredDate)
            .setIssuedAt(new Date())
            .compact();
    }

    // 입력된 token 에서 payload 에 있는 userId 뽑기
    public String validateAndGetUserId(String token) {
        Claims claims = Jwts.parser()
            .setSigningKey(jwtProperties.getSecretKey())
            .parseClaimsJws(token) // 토큰이 위조되지 않았다면 payload를 return
            .getBody();

        return claims.getSubject();
    }
}

# Spring Boot JWT (Java 8) - Esempio minimo

## Requisiti
- JDK 1.8
- Maven 3.x

## Avvio
```bash
mvn spring-boot:run
```

## Test
1. Login (ottieni il token):
```
POST http://localhost:8080/auth/login?username=user&password=pass
```

2. Endpoint protetto:
```
GET http://localhost:8080/hello
Header: Authorization: Bearer <token>
```

package com.example.demo.controller;

import com.example.demo.dto.HelloResponse;
import com.example.demo.service.HelloService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloWorldController {

    private final HelloService helloService;

    public HelloWorldController(HelloService helloService) {
        this.helloService = helloService;
    }

    @GetMapping("/hello")
    public String helloWorldName(@RequestParam(required = false) String name) {
        return helloService.addHello(name);
    }

    @PostMapping("/helloname")
    public String helloname(@RequestBody HelloRequest request) {
        return helloService.getSaluti(request.getNome());
    }

    @PostMapping("/getName")
    public HelloResponse helloDto(@RequestBody HelloRequest request) {
        return helloService.getSalutiDto(request.getNome());
    }

    @GetMapping("/user/{id}")
    public String getUserById(@PathVariable int id){
        return "utente id: "+id;
    }

    @GetMapping("user/{id}/post")
    public String getUserPost(@PathVariable int id, @RequestParam int page){
        return "Post dell utente "+id+" pagina "+page;

    }
}
package com.okta.developer.demo.beer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
class BeerCommandLineRunner implements CommandLineRunner {

    private final BeerRepository repository;

    public BeerCommandLineRunner(BeerRepository repository) {
        this.repository = repository;
        // Top beers from https://www.beeradvocate.com/lists/us, November 2018
        Stream.of("Kentucky Brunch Brand Stout", "Marshmallow Handjee", "Barrel-Aged Abraxas",
                "Hunahpu's Imperial Stout", "King Julius", "Heady Topper",
                "Budweiser", "Coors Light", "PBR").forEach(name ->
                repository.save(new Beer(name))
        );
    }

    @Override
    public void run(String... strings) {
        repository.findAll().forEach(System.out::println);
    }
}

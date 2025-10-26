import java.util.List;

public class MainFilm {
    public static void main(String[] args) {
        List<Film> films = List.of(
                new Film("Avengers Endgame", "azione", 2),
                new Film("harry Potter", "fantasy", 2),
                new Film("knives out", "triller", 3),
                new Film("One piece", "anime", 4)
        );

        films.stream().filter(f->f.getGenere().   equals("fantasy")).forEach(System.out::println);
        films.stream().filter(f->f.getDurata() >3).forEach(System.out::println);


    }
}

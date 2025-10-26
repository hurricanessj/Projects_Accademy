public class Main {
    public static void main(String[] args) {

        System.out.println("""
                ___________                  .___.__  __               .__        __      /\\ \s
                \\_   _____/______   ____   __| _/|__|/  |______ _______|__| _____/  |_____)/ \s
                 |    __)_\\_  __ \\_/ __ \\ / __ | |  \\   __\\__  \\\\_  __ \\  |/ __ \\   __\\__  \\ \s
                 |        \\|  | \\/\\  ___// /_/ | |  ||  |  / __ \\|  | \\/  \\  ___/|  |  / __ \\_
                /_______  /|__|    \\___  >____ | |__||__| (____  /__|  |__|\\___  >__| (____  /
                        \\/             \\/     \\/               \\/              \\/          \\/\s
                """);



        Cane cane = new Cane("Pippo");
        Gatto gatto = new Gatto("Figaro");


        cane.faiVerso();
        cane.stampaNome();
        gatto.faiVerso();
        gatto.stampaNome();

    }
}

public class Gatto extends Animale {
    String tipo = "gatto";
    public Gatto(String nome) {
        super(nome);
    }

    @Override
    void faiVerso() {
         System.out.println("""
                  _______                  \s
                 (_______)                 \s
                  _  _  _ _____  ___  _ _ _\s
                 | ||_|| | ___ |/ _ \\| | | |
                 | |   | | ____| |_| | | | |
                 |_|   |_|_____)\\___/ \\___/\s
               
                    /\\\\_/\\\\ \s
                   ( o.o )\s
                    > ^ <\s
                 
                """);
    }

    @Override
    public void stampaNome(){
        System.out.println("tipo "+tipo+"\nNome: "+nome);
    }
}

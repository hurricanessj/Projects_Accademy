public class Cane extends Animale{
    String tipo = "cane";

    public Cane(String nome) {
        super(nome);
    }

    @Override
    void faiVerso() {
        System.out.println("""
                 _                \s
                | |               \s
                | |__  _____ _   _\s
                |  _ \\(____ | | | |
                | |_) ) ___ | |_| |
                |____/\\_____|____/\s
                
                /^-----^\\\\
                V  o o  V
                 |  Y  |
                  \\\\ Q /
                  / - \\\\
                  |    \\\\
                  |     \\\\     )
                  || (___\\\\====

                """);

    }

    @Override
    public void stampaNome(){
        System.out.println("tipo "+tipo+"\nNome: "+nome);
    }
}

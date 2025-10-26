public class Persona {
    String nome;
    int eta;

    public Persona(String nome, int eta) {
        this.nome = nome;
        this.eta = eta;
    }

    public Persona(){
    }

    public void saluta(){
        System.out.println("ciao mi chiamo: "+ this.nome+" ed ho: "+eta+" anni");
    }

    public int somma(int a, int b){
        return a + b ;
    }

    public void stampaMessaggio(){
        System.out.println("questo è il messaggio da stampare");
    }
}

public class CartaDiCredito implements  PaymentStrategy{
     private String numeroCarta;
     private String nome;

    public CartaDiCredito(String numeroCarta, String nome) {
        this.numeroCarta = numeroCarta;
        this.nome = nome;
    }

    @Override
    public void pay(int amount) {
        System.out.println("ho pagato con carta di credito "+ amount);
    }


}

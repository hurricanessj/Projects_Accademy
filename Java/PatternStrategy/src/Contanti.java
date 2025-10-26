public class Contanti implements PaymentStrategy{

    @Override
    public void pay(int amount) {
        System.out.println("pagamento di "+amount+" in contanti");
    }
}

public class PaymentMain {
    public static void main(String[] args) {

        PaymentStrategy carta = new CartaDiCredito("aaaa","postepay");
        PaymentStrategy paypall = new PayPall("example@mail.com", "pwd123");
        PaymentStrategy contanti= new Contanti();

        PaymentContext context = new PaymentContext(carta);
        context.eseguiPagamento(50);

        context.setPaymentStrategy(paypall);
        context.eseguiPagamento(50);
    }
}

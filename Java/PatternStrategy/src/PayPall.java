public class PayPall implements PaymentStrategy {
    private String email;
    private String password;

    public PayPall(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @Override
    public void pay(int amount) {
        System.out.println("pagamento di:"+amount+" con paypall");
    }
}

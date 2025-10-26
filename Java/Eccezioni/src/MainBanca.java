public class MainBanca {
    public static void main(String[] args) {
        ContoBancario conto= new ContoBancario(120);
        conto.deposita(50);
        System.out.println("saldo attuale"+ conto.getSaldo());
        try{
            conto.preleva(30);
            conto.preleva(150);
        } catch (SaldoInsufficienteExeption e) {
            System.out.println(e.getMessage());
        }
        System.out.println("saldo finale: "+conto.getSaldo());

    }
}

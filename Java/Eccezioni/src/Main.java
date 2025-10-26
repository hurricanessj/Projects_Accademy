public class Main {
    public static void main(String[] args) {
        Credenziali loginService = new Credenziali();

        try {
            loginService.login("admin", "1234");
        } catch (LoginExeption e) {
            System.out.println("Errore di login: " + e.getMessage());
        }

        ContoUtente conto = new ContoUtente(100.0);

        try {
            conto.acquista(30.0);
            conto.acquista(80.0);
        } catch (SaldoInsufficienteExeption e) {
            System.out.println("Errore acquisto: " + e.getMessage());
        }
    }
}

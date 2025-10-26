public class Credenziali {
    private static final String VALID_USERNAME = "admin";
    private static final String VALID_PASSWORD = "1234";

    public void login(String username, String password) throws LoginExeption {
        if (!username.equals(VALID_USERNAME) || !password.equals(VALID_PASSWORD)) {
            throw new LoginExeption("Credenziali non valide.");
        }
        System.out.println("Login effettuato con successo.");
    }
}

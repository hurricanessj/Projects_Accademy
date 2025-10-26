public class MainCodiceFiscale {
    public static void main(String[] args) {
        String[] codiciDaTestare = {
                "CPPDVD04E21F839Z",
                "123", "abc!23456789qwer", null
        };

        for (String cf : codiciDaTestare) {
            try {
                CodiceFiscaleValidator.valida(cf);
                System.out.println("codice fiscale valido " + cf);
            } catch (CodiceFiscaleExeption e) {
                System.out.println("codice fiscale non valido " + cf + " " + e.getMessage());
            }
        }
    }
}

public class CodiceFiscaleValidator {
    public static void valida(String cf) throws CodiceFiscaleExeption{
        if(cf == null || cf.length() != 16){
            throw new CodiceFiscaleExeption("codice fiscale deve contenere esattamente 16 caratteri ");
        }
        if(!cf.matches("[A-Z0-9]+")) throw new CodiceFiscaleExeption("il codice contiene caratteri non validi");
    }
}

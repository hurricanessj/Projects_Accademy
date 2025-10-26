public class LunghezzaPasswordMain {
    public static void main(String[] args) {

        try {
            Utente u = new Utente("gaetano");
            u.setPwd("pwd");
        }catch (lunghezzaPasswordExeption e){
            System.out.println(e);

        }
    }
}

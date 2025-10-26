public class Utente {
    private String username;
    private String pwd;

    public Utente(String username) {
        this.username = username;
    }

    public void setPwd(String pwd) {
        if (pwd.length()<10){
            throw new lunghezzaPasswordExeption("la password ha: "+pwd.length()+" caratteri");
        }else {
            this.pwd = pwd;
        }
    }
}

public class StrumentoFactory {

    public static StrumentiMusicali creaStrumento(String strumentType){
        switch (strumentType.toLowerCase()) {
            case "chitarra":
                return new Chitarra();
            case "batteria":
                return new Batteria();
            case "piano":
                return new Piano();
            default:
                throw  new IllegalArgumentException("mezzo di strasporto sconosciuto");
        }
    }
}

public class Factory {
    public static Attrazione creaAttrazione(String tipoAttrazione){
        switch (tipoAttrazione.toLowerCase()) {
            case "giostra":
                return new Giostra();
            case "spettacolo":
                return new Spettacolo();
            case "giocoAcqua":
                return new GiocoAcqua();
            default:
                throw  new IllegalArgumentException("attrazione non conosciuta");
        }
    }
}

public class TransportFactory {

    public static TransporStrategy createTransport(String transportType) {
        switch (transportType.toLowerCase()) {
            case "auto":
                return new Auto();
            case "aereo":
                return new Aereo();
            case "treno":
                return new Treno();
            default:
                throw  new IllegalArgumentException("mezzo di strasporto sconosciuto");
        }
    }
}

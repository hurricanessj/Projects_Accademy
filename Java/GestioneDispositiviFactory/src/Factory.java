public class Factory {

    public static Device creaDispositivo(String DeviceType){
        switch (DeviceType.toLowerCase()) {
            case "Smartphone":
                return new Smartphone();
            case "Tablet":
                return new Tablet();
            case "laptop":
                return new Laptop();
            default:
                throw  new IllegalArgumentException("Device non trovato");
        }
    }
}

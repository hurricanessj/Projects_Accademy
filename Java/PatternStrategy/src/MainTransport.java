public class MainTransport {
    public static void main(String[] args) {
        TransporStrategy auto = TransportFactory.createTransport("auto");
        TransporStrategy treno = TransportFactory.createTransport("treno");
        TransporStrategy aereo = TransportFactory.createTransport("aereo");


        TransportContext context = new TransportContext(auto);
        context.calcolaCosto("Roma", "Napoli");
        context.calcolaCosto("Roma", "Napoli");

        context.setTransporStrategy(aereo);
        context.calcolaCosto("Roma", "Napoli");
        context.calcolaCosto("Roma", "Napoli");
    }
}

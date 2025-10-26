public class Main {
    public static void main(String[] args) {

        Device[] deviceList= new Device[2];
        deviceList[0] = Factory.creaDispositivo("laptop");
        deviceList[2] = Factory.creaDispositivo("tablet");
        deviceList[3] = Factory.creaDispositivo("smartphone");

        Context context = new Context(deviceList);

        context.accendiTutti();
        context.spegniTutti();


    }
}
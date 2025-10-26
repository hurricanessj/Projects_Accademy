public class Tablet implements  Device{
    @Override
    public void accendi() {
        System.out.println("il tablet si sta accendendo");
    }

    @Override
    public void spegni() {
        System.out.println("tablet in spegnimento");

    }
}

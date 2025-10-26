public class Smartphone implements  Device{
    @Override
    public void accendi() {
        System.out.println("il cellulare si sta accendendo");
    }

    @Override
    public void spegni() {
        System.out.println("cellulare in spegnimento");

    }
}

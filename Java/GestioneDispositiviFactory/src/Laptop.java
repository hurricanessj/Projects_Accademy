public class Laptop implements Device{
    @Override
    public void accendi() {
        System.out.println("il laptop si sta accendendo");
    }

    @Override
    public void spegni() {
        System.out.println("laptop in spegnimento");

    }
}

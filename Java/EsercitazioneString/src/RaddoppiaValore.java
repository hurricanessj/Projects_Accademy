public class RaddoppiaValore {
    public void raddoppia(int x){
        int raddoppio = x*2;
        System.out.println("valore raddoppiato"+ raddoppio);
    }

    public void raddoppia(Valore valore){
        System.out.println("parametro passato per riferimento");
        int raddoppio = valore.numero*2;
        System.out.println("raddoppio della classe: "+raddoppio);
    }

}

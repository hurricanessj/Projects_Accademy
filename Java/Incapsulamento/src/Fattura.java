import java.sql.SQLOutput;

public class Fattura {
    private float importoFattura;
    private static float totaleFattura;

    public Fattura(float importo){
        this.importoFattura =importo;
        this.totaleFattura += importo;
        System.out.println("importo fattura: "+importo);

    }

public static float getTotaleFatture(){
        return totaleFattura;
}



}

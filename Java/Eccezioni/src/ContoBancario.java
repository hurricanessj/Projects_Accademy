public class ContoBancario {
    private double saldo;

    public ContoBancario(double saldo) {
        this.saldo = saldo;
    }

    public void deposita(double importo){
        saldo += importo;
        System.out.println("deposito di: "+importo+" €");
    }

    public void preleva(double importo) throws SaldoInsufficienteExeption{

        if(importo>saldo){
            throw new SaldoInsufficienteExeption("saldo insufficiente hai solo: "+saldo+"€");
        }
        saldo-=importo;
        System.out.println("prelievo di"+importo);
    }

    public double getSaldo() {
        return saldo;
    }

}

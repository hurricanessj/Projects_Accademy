public class ContoUtente {
    private double saldo;

    public ContoUtente(double saldoIniziale) {
        this.saldo = saldoIniziale;
    }

    public void acquista(double importo) throws SaldoInsufficienteExeption {
        if (importo > saldo) {
            throw new SaldoInsufficienteExeption("Saldo insufficiente per completare l'acquisto.");
        }
        saldo -= importo;
        System.out.println("Acquisto effettuato. Saldo residuo: " + saldo);
    }

    public double getSaldo() {
        return saldo;
    }
}

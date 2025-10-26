package secondoEsercizio;

public class Manager extends Dipendente {
    private double budget;
    public Manager() {
    }

    public Manager(String nome, double stipendio, String cognome, String dataAssunzione, double budget) {
        super(nome, stipendio, cognome, dataAssunzione);
        this.budget = budget;
    }

    public void assegnaBonus(Dipendente d, double bonus) {
        if (bonus <= budget) {
            d.riceviBonus(bonus);
            budget -= bonus;
        } else {
            System.out.println("Bonus superiore al budget disponibile per il manager.");
        }
    }

    public double getBudget() {
        return budget;
    }
}

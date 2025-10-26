public class Main {
    public static void main(String[] args) {
        Strategy breve = new PercorsoBreve();
        Strategy veloce = new PercorsoVeloce();
        Strategy panoramico = new PercorsoPanoramico();

        PercorsoContext context = new PercorsoContext(breve);

        context.calcolaPercorso("milano", "napoli");
        context.setStrategy(panoramico);
        context.calcolaPercorso("milano", "napooli");


    }
}
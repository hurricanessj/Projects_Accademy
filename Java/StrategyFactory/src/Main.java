public class Main {
    public static void main(String[] args) {
        StrumentiMusicali chitarra = StrumentoFactory.creaStrumento("chitarra");
        StrumentiMusicali batteria = StrumentoFactory.creaStrumento("batteria");
        StrumentiMusicali piano = StrumentoFactory.creaStrumento("piano");

        StrumentiContext context = new StrumentiContext(chitarra);
        context.showStrumento("chitarra elettrica");

        context.setStrumentiMusicali(batteria);
        context.showStrumento("batteria");
    }
}
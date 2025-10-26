public class StrumentiContext {
    StrumentiMusicali strumentiMusicali;

    public StrumentiContext(StrumentiMusicali strumentiMusicali) {
        this.strumentiMusicali = strumentiMusicali;
    }

    public void setStrumentiMusicali(StrumentiMusicali strumentiMusicali) {
        this.strumentiMusicali = strumentiMusicali;
    }

    public void showStrumento(String strumento){
        strumentiMusicali.play(strumento);
    }

}

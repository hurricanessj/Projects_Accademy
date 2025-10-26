public class InfoVip {
    private boolean accessoPrioritario;
    private String regalo;

    public InfoVip(boolean accessoPrioritario, String regalo) {
        this.accessoPrioritario = accessoPrioritario;
        this.regalo = regalo;
    }

    @Override
    public String toString() {
        return "InfoVip{" +
                "accessoPrioritario=" + accessoPrioritario +
                ", regalo='" + regalo + '\'' +
                '}';
    }
}

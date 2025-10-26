public class Triangolo extends FiguraBidimensionale {
    public Triangolo(int dim1, int dim2) {
        super(dim1, dim2);
    }

    @Override
    int calcolaArea() {
        return dim1*dim2/2;
    }
}

public class Rettangolo extends FiguraBidimensionale {

    public Rettangolo(int dim1, int dim2) {
        super(dim1, dim2);
    }

    @Override
    int calcolaArea() {
        return dim1*dim2;
    }
}

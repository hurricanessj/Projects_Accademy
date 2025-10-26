public abstract class  FiguraBidimensionale {
    int dim1;
    int dim2;

    public FiguraBidimensionale(int dim1, int dim2) {
        this.dim1 = dim1;
        this.dim2 = dim2;
    }

    abstract int calcolaArea();


}

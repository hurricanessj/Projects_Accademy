package model;

public class Contatto {
    private String nome;
    private int number;

    public Contatto(String nome, int number) {
        this.nome = nome;
        this.number = number;
    }

    public Contatto(){}

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}

#include <iostream>
#include <string>

using namespace std;
/*
class RiparatoreComputer
{
public:
    virtual void riparaPc() = 0;
    virtual void installaProgrammi() = 0;
};


*/

class Persona
{
private:
    string nome = "luca";
    string cognome = "rossi";
    int eta = 20;

public:
    Persona(string nome, string cosgnome, int eta)
    {
        this->nome = nome;
        this->cognome = cognome;
        this->eta = eta;
    }
    // virtual rende la classe astratta e costringe a chi estende la classe che ha questo metodo è costretto a estendere il metodo
    virtual void saluta() = 0;

    string getNome() const { return nome; }
    string getCognome() const { return cognome; }
    int getEta() const { return eta; }

    void setNome(const string &nuovoNome) { nome = nuovoNome; }
    void setCognome(const string &nuovoCognome) { cognome = nuovoCognome; }
    void setEta(int nuovaEta) { eta = nuovaEta; }
};

class Studente : public Persona//, public RiparatoreComputer
{
public:
    Studente(string nome, string cognome, int eta, string classe) : Persona(nome, cognome, eta)
    {
        this->classe = classe;
    }
    string classe = "4a";

    void saluta() override
    {
        cout << "ciao sono " << getNome() << " della classe " << classe << endl;
    }

    void diClasse()
    {
        cout << "la mia classe  e' la : " << classe << endl;
    }

};

int main()
{

    Studente s1("gaetano", "esposito", 20, "5S");

    s1.saluta();
    Studente studente1("pippo", "pluto", 20, "3b");
    studente1.saluta();
    studente1.diClasse();
    return 0;
}

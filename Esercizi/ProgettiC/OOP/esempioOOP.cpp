#include <iostream>
#include <string>

using namespace std;

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

    Persona()
    {
    }

    void saluta()
    {
        cout << "ciao sono: " << this->nome << endl;
    }

    string getNome() const { return nome; }
    string getCognome() const { return cognome; }
    int getEta() const { return eta; }

    void setNome(const string &nuovoNome) { nome = nuovoNome; }
    void setCognome(const string &nuovoCognome) { cognome = nuovoCognome; }
    void setEta(int nuovaEta) { eta = nuovaEta; }
};

int main()
{

    Persona p1("gaetano", "esposito", 20);
    Persona p2;

    p1.saluta();
    return 0;
}

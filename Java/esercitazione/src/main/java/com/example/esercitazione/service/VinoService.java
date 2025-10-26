package com.example.esercitazione.service;

import com.example.esercitazione.dto.VinoRequest;
import com.example.esercitazione.dto.VinoResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class VinoService {

    //////////lista di vini/////////////

    List<VinoRequest> cantina = new ArrayList<>();

    public VinoResponse mostraCantina() {
        String messaggio = "";
        for(VinoRequest vino : cantina) {
            messaggio += "      " + vino.getNome();
        }
        return new VinoResponse(messaggio);
    }

    public VinoResponse filtraViniPerAnno(int anno) {
        String message = "";
        for(VinoRequest vino: this.cantina) {
            if(vino.getAnno() < anno ) {
                message+= "  " + vino.getNome();
            }
        }
        return new VinoResponse(message);
        //return new VinoResponse(this.cantina.stream().filter(v-> v.getAnno() > anno).toString());
    }

    public VinoResponse aggiungiVino(VinoRequest vino) {
        this.cantina.add(vino);
        return new VinoResponse("il vino: "+vino+" è stato aggiunto");
    }


}

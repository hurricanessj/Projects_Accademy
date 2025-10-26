package com.example.Iscrizionimanytomany.Model;

import jakarta.persistence.Embeddable;


@Embeddable
public class IscrizioneId {

    private Long studenteId;
    private Long corsoId;

    public IscrizioneId() {
    }

    public IscrizioneId(Long studenteId, Long corsoId) {
        this.studenteId = studenteId;
        this.corsoId = corsoId;
    }


}

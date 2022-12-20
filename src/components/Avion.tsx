import React, { Component } from 'react'

const Avion: React.FC<{nom:string;matricule:string}> = (props) => {
    return(
        <React.Fragment>
            <h2>Nom de l'avion : {props.nom}</h2>
            <p><b>Matricule: {props.matricule} </b></p>
        </React.Fragment>
    );
}

export default Avion;
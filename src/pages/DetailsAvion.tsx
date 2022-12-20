import { IonCol, IonContent, IonItem, IonPage, IonRow } from '@ionic/react';
import React, { Component, Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import AvionKilometrage from '../components/AvionKilometrage';
import DetailAvion from '../components/DetailAvion';

const DetailsAvion:React.FC = () => {
    const id = useParams<any>();
    var bref:[] = [];
    const [kilometrageDetails, setKilometrageDetails] = useState<any[]>([]);
    const [personnalDetail,setPersonnalDetail] = useState<any>([]);

    useEffect(() => {
        fetch("http://localhost:8080/avions/details/"+id.idAvion, {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then( (response) =>  {
            return response.json();
        } )
        .then( (json) => {
            setPersonnalDetail(json[0])
            setKilometrageDetails(json[1])

            console.log(json);
            
            
        });

    },[] )    

    return(
        <IonPage>
            <IonContent fullscreen={false} className="ion-padding">
                <IonItem color="medium">Détails sur l'avion</IonItem>
                <DetailAvion nomType={personnalDetail.nomType} nbrPlace={personnalDetail.nbrPlace} idAvion={personnalDetail.id}  />

            <hr/>

            <IonItem color="medium">Details kilométrage</IonItem>
            {
                kilometrageDetails?.map( (element:any,index) => (
                <Fragment key={index}>
                    <AvionKilometrage dateKilometrage={element.dateKilometrage} debutkm={element.debutkm} finkm={element.finkm}  />
                </Fragment>    
            ))
            }
            </IonContent>
            
        </IonPage>  
    );
}
export default DetailsAvion;
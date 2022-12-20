import { IonPage, IonRow, IonCol, IonItem, IonButton, IonContent } from '@ionic/react';
import React, { Component, useEffect, useRef, useState } from 'react'
import Avion from '../components/Avion';
import { avion, getAvions } from '../data/avion';

const Expiration:React.FC = () => {
    const [avions, setAvions] = useState<avion[]>([]);
    const limitMonth:any = useRef();

    const vehiculeAssuranceExpiring = () => {
        // you send a fetch request for getting the assurance where the month is inferior to now        
        let monthLimit =  limitMonth.current.value;
        setAvions([]);

        fetch("http://127.0.0.1:8080/avions/expirations/"+monthLimit, {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then( (response:any) => (response.json()))
        .then( (json) => setAvions(json) )
    }
    

    // Displaying the liste of all the vehicules
    return(
        <IonPage>
            <IonContent>
                <IonItem color="medium">
                    Expiration de l'assurance
                </IonItem>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <label htmlFor="limitMois">Expiration dans</label>
                        <input type="number" ref={limitMonth} name="limitMois" id="limitMois" />
                        <IonButton onClick={vehiculeAssuranceExpiring}>Valider</IonButton>
                    </IonItem>
                </IonCol>
            </IonRow>

            { 
                avions?.map( (element,index) =>(
                    <>
                        <IonRow key={index}>
                            <IonCol>
                                <IonRow>
                                    <IonItem>
                                        <Avion nom={element['nom']} matricule={element['matricule']}/>
                                    </IonItem>
                                </IonRow>                                    
                            </IonCol>
                        </IonRow>
                    </>    
                ))
                }
            </IonContent>
        </IonPage>
    );
    
}

export default Expiration;
import { IonButton, IonCol, IonContent, IonItem, IonPage, IonRow } from '@ionic/react';
import { useHistory } from "react-router-dom";
import React, { Component, useEffect, useState } from 'react'
import Avion from '../components/Avion';



const ListeAvion:React.FC = () => {
    const navigate = useHistory();
    
    const getDetails = (idAvion:string) =>{
        if(localStorage.getItem("Authorization")==null)
            // window.location.href = "/";
            navigate.push("/login/"+idAvion)

        else {
            navigate.push("/details/"+idAvion);
        }
    }

    const [Vehicules, setVehicules] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8080/avions", {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then( (response) =>  {
            return response.json();
        } )
        .then( (json) => {
            setVehicules(json);
        })
    }, [])
    
    

    // Displaying the liste of all the vehicules
    return(
        <IonPage>
            <IonContent>
            <IonItem color="medium">
                Liste des avions
            </IonItem>
            { 
                Vehicules?.map( (element,index) =>(
                    <IonRow key={index}>
                        <IonCol>
                            <IonRow>
                                <IonItem>
                                    <Avion nom={element['nom']} matricule={element['matricule']}/>
                                </IonItem>
                            </IonRow>

                            <IonRow>
                                <IonButton onClick={()=>(getDetails(element['id']))}>Détails</IonButton>                            
                            </IonRow>
                                
                        </IonCol>
                    </IonRow>    
                ))
                }
                
            </IonContent>
        </IonPage>
    );
}

export default ListeAvion;
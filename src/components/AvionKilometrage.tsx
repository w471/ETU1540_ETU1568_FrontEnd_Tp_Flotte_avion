import { IonCol, IonItem, IonRow } from '@ionic/react';
import React, { Component } from 'react'

const AvionKilometrage:React.FC<{dateKilometrage:string,debutkm:number,finkm:number}> = (props) => {
    return(
        <IonRow>
            <IonCol>
                <IonItem>Date kilomtrage : {props.dateKilometrage}</IonItem>
            </IonCol>
            <IonCol>
                <IonItem>Debut kilométrage : {props.debutkm}</IonItem>
            </IonCol>
            <IonCol>
                <IonItem>Fin kilométrage : {props.finkm}</IonItem>
            </IonCol>
        </IonRow>
    );
}

export default AvionKilometrage;
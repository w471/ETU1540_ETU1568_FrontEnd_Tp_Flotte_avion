import { IonRow, IonCol, IonItem, IonImg } from "@ionic/react";
import { FC } from "react";

const DetailAvion:FC<{nomType:string;nbrPlace:number;idAvion:number}> = (props) =>{
    let imgLocation = "../resources/"+props.idAvion+".jpg";

    return(
    <IonRow>
        <IonCol>
            <IonItem>Type de l'avion : {props.nomType}</IonItem>
        </IonCol>
        <IonCol>
            <IonImg src={imgLocation} alt="The image of the airplane"></IonImg>
        </IonCol>
        <IonCol>
            <IonItem>Nombre de place par défaut : {props.nbrPlace}</IonItem>
        </IonCol>
    </IonRow>  
    );
}

export default DetailAvion;
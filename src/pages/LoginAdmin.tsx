import React, { useRef } from 'react'
import { IonPage, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { useHistory, useParams } from 'react-router';


const LoginAdmin:React.FC = () => {
    const idAvion = useParams<any>();
    const identifiant = useRef<HTMLIonInputElement>(null);
  const password = useRef<HTMLIonInputElement>(null);
  const history = useHistory()

  const checkLogin = () => {    
        // the ref we obtained can't be null since we already pointed it
        const inputIdentifiant = identifiant.current!.value;
        const inputLogin = password.current!.value;
        
        if(inputLogin=='' || inputIdentifiant=='' )
        return;

    // Send the login to the api 
        fetch("http://127.0.0.1:8080/admins/checkLogin", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            identifiant:inputIdentifiant,
            pwd: inputLogin
        })
        })
        .then((response) => {
            if (response.status === 500) {
            alert("Mot de passe non identifier");
            } else return response.text();
        })
        .then((token) => {
            if(token!=undefined){                
                localStorage.setItem("Authorization",'Bearer'+token)            
                history.push("/detailsAvion/"+idAvion.idAvion);
            }
        });

        
    };

    return(
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Counter incrementation</IonTitle>
            </IonToolbar>
            </IonHeader>  


            <IonContent className='ion-padding'>
            <IonGrid>
                <IonRow>
                <IonCol>

                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Nom</IonLabel>
                        <IonInput ref={identifiant} value="nomAdmin"></IonInput>
                    </IonItem>
                    </IonRow>

                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Password</IonLabel>
                        <IonInput ref={password} value="mdp"></IonInput>
                    </IonItem>
                    </IonRow>

                    <IonRow>
                    <IonCol>
                        <IonButton onClick={checkLogin}>Se connecter</IonButton>
                    </IonCol>

                    <IonCol>
                        <IonButton>S'inscrire</IonButton>
                    </IonCol>
                    </IonRow>


                </IonCol>
                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
        );
}

export default LoginAdmin;
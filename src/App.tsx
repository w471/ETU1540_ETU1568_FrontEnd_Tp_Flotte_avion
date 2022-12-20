import { Redirect, Route } from 'react-router-dom';
import { IonApp,IonButton,IonCol,IonContent,IonGrid,IonHeader,IonIcon,IonInput,IonItem,IonLabel,IonRouterOutlet, IonRow, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import {airplane, albums} from 'ionicons/icons'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useRef } from 'react';

import LoginAdmin from './pages/LoginAdmin';
import ListeAvion from './pages/ListeAvion';
import DetailsAvion from './pages/DetailsAvion';
import ExpirationAsk from './pages/ExpirationAsk';

setupIonicReact();

const App: React.FC = () => {
  return (
    // Router for message
    // <IonApp>
    //   <IonReactRouter>
    //     <IonRouterOutlet>
    //       <Route path="/" exact={true}>
    //         <Redirect to="/home" />
    //       </Route>
    //       <Route path="/home" exact={true}>
    //         <Home />
    //       </Route>
    //       <Route path="/message/:id">
    //          <ViewMessage />
    //       </Route>
    //     </IonRouterOutlet>
    //   </IonReactRouter>
    // </IonApp>
    <IonApp>
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/listeAvion" component={ListeAvion} />
              <Route path="/expiration" component={ExpirationAsk}></Route>
              <Route path="/login/:idAvion" component={LoginAdmin}></Route>
              <Route path="/details/:idAvion" component={DetailsAvion}></Route>
              {/* when a user visits the root URL of the app ("/"), it redirects them to the "/dashboard" URL. */}
              <Redirect exact from="/" to="/listeAvion" />
        </IonRouterOutlet>

      <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/listeAvion">
            <IonIcon icon={airplane} />
            <IonLabel>Liste Avion</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/expiration">
            <IonIcon icon={albums} />
            <IonLabel>Expiration assurance</IonLabel>
          </IonTabButton>
        </IonTabBar>
      
        </IonTabs>
    </IonReactRouter>
    </IonApp>


  );
};


export default App;
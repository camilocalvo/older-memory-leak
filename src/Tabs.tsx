import React from "react";
import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";

import "./App.css";
import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

const TabsComponent: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        <Route path="/tabs/home" render={() => <Home />} />
        <Route path="/tabs/about" render={() => <About />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href={"/tabs/home"}>
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="about" href={"/tabs/about"}>
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabsComponent;

import React from "react";
import { IonButton, IonPage } from "@ionic/react";
import { useHistory } from "react-router";

export const Login: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/tabs/home");
  };

  return (
    <IonPage>
      <IonButton onClick={() => handleLogin()}>Login</IonButton>
    </IonPage>
  );
};

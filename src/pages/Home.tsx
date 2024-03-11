import { IonButton, IonPage } from "@ionic/react";
import { useHistory } from "react-router";

export const Home: React.FC = () => {
  const history = useHistory();

  const handleLogOut = () => {
    history.push("/");
  };

  return (
    <IonPage>
      <h1>Home</h1>
      <IonButton
        onClick={() => {
          handleLogOut();
        }}
      >
        Log Out
      </IonButton>
    </IonPage>
  );
};

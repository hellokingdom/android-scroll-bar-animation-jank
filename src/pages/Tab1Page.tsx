import {
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

const Tab1Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 Inner Page</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>{" "}
        {/*-- List of Text Items --*/}
        <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>
        {/*-- List of Input Items --*/}
        <IonList>
          <IonItem>
            <IonLabel>Input</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Toggle</IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>
          <IonItem>
            <IonLabel>Radio</IonLabel>
            <IonRadio slot="end"></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
        </IonList>
        {/*-- List of Sliding Items --*/}
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>{" "}
        <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>
        {/*-- List of Input Items --*/}
        <IonList>
          <IonItem>
            <IonLabel>Input</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Toggle</IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>
          <IonItem>
            <IonLabel>Radio</IonLabel>
            <IonRadio slot="end"></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
        </IonList>
        {/*-- List of Sliding Items --*/}
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1Page;

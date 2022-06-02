import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from "@angular/material/button";

import { HomePageModule } from "./home-page/home-page.module";
import { PsalmPageModule } from "./psalm-page/psalm-page.module";
import { SharedModule } from "./shared/shared.module";
import { StateModule } from "./state/state.module";
import { AppRoutingModule } from "./app.routing.module";
import {
  getFirestore,
  provideFirestore,
  FirestoreModule,
} from "@angular/fire/firestore";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { ServerPageModule } from "./server-page/server-page/server-page.module";

const firebaseConfig = {
  apiKey: "AIzaSyCjUFfiNlVcXR03aW28ZdhCdg8_lmzk15k",
  authDomain: "blog-46974.firebaseapp.com",
  databaseURL: "https://blog-46974-default-rtdb.firebaseio.com",
  projectId: "blog-46974",
  storageBucket: "blog-46974.appspot.com",
  messagingSenderId: "836636966533",
  appId: "1:836636966533:web:62c7e8bd6e9b6ac998f3ec",
  measurementId: "G-MPQSH2L8FZ",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    FirestoreModule,
    HomePageModule,
    PsalmPageModule,
    ServerPageModule,
    SharedModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    StateModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

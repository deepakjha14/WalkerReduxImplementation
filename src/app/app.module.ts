import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule } from '@angular/material';

// Store related imports
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { casinoReducer } from './state/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      CasinoState: casinoReducer
    }),
    StoreDevtoolsModule.instrument({
      name: "Casino Details",
      maxAge: 40
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

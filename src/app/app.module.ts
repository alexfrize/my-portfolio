import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatButtonModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BottomLinksComponent } from './components/bottom-links/bottom-links.component';
import { ActionDialogComponent } from './components/portfolio/action-dialog/action-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TopMenuComponent,
    AboutComponent,
    ExperienceComponent,
    ContactsComponent,
    BottomLinksComponent,
    ActionDialogComponent
  ],
  entryComponents: [ActionDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

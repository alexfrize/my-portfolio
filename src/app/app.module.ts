import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BottomLinksComponent } from './components/bottom-links/bottom-links.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TopMenuComponent,
    AboutComponent,
    ExperienceComponent,
    ContactsComponent,
    BottomLinksComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

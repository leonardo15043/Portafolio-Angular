import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListPortfolioComponent } from './components/portfolio/list-portfolio/list-portfolio.component';
import { DetailPortfolioComponent } from './components/portfolio/detail-portfolio/detail-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPortfolioComponent,
    DetailPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

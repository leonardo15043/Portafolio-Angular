import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPortfolioComponent } from './components/portfolio/list-portfolio/list-portfolio.component';
import { DetailPortfolioComponent } from './components/portfolio/detail-portfolio/detail-portfolio.component';

const routes: Routes = [
  { path: 'portfolio', component: ListPortfolioComponent },
  { path: 'detail-portfolio', component: DetailPortfolioComponent },
  { path: '**', pathMatch:'full', redirectTo: 'portfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

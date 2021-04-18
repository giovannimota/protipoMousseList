import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
//import { CardComponent } from './pages/card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: "", component: MainComponent
  },
  {
    path: "card", component: CardComponent
  }, 
  {
    path: "main", component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

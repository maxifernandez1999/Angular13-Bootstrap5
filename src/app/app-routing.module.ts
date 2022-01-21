import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './layout/container/container.component';
import { GridComponent } from './layout/grid/grid.component';
import { BackgroundComponent } from './utilities/background/background.component';
import { BorderComponent } from './utilities/border/border.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'grid', component: GridComponent },
  { path: 'background', component: BackgroundComponent },
  { path: 'border', component: BorderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

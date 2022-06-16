import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchesComponent } from './watches/watches.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'watch', component: WatchesComponent },
  { path: '', component: WatchesComponent  },
  { path: 'watch/category/:categoryId', component: WatchesComponent },
  { path: 'watch/category/:categoryId/:brandId', component: WatchesComponent },
  { path: 'watch/color/:colorId', component: WatchesComponent },
  { path: 'watch/brand/:brandId', component: WatchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

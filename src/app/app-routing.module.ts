import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApodComponent} from "./apod/apod.component";
import {LibraryComponent} from "./library/library.component";
import {EarthComponent} from "./earth/earth.component";

const routes: Routes = [
  { path: 'apod', component: ApodComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'earth', component: EarthComponent },
  { path: '',   redirectTo: '/apod', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

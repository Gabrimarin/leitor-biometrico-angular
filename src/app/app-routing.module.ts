import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationsComponent } from './_pages/aplications/aplications.component';
import { IntroComponent } from './_pages/intro/intro.component';
import { RegisterComponent } from './_pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/introducao', pathMatch: 'full' },
  { path: 'introducao', component: IntroComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'aplicacao', component: AplicationsComponent },
  // { path: 'adopteds', component: AdoptedsComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

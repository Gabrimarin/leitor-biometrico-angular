import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './_components/nav-bar/nav-bar.component';
import { NavBarItemComponent } from './_components/nav-bar-item/nav-bar-item.component';
import { IntroComponent } from './_pages/intro/intro.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './_pages/register/register.component';
import { AplicationsComponent } from './_pages/aplications/aplications.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomImageComponent } from './_components/custom-image/custom-image.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarItemComponent,
    IntroComponent,
    RegisterComponent,
    AplicationsComponent,
    CustomImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    // NgbModal,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { APP_ROUTING } from './app.routes';
import { ContainersForSalesComponent } from './pages/containers-for-sales/containers-for-sales.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { HowAndWhyComponent } from './pages/how-and-why/how-and-why.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NguCarouselModule } from '@ngu/carousel';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetQuoteComponent } from './pages/get-quote/get-quote.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { ThanksYouComponent } from './pages/thanks-you/thanks-you.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContainersForSalesComponent,
    ProductInfoComponent,
    HowAndWhyComponent,
    ContactComponent,
    FooterComponent,
    GetQuoteComponent,
    ThanksYouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    NguCarouselModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}



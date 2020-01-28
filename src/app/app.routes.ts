import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContainersForSalesComponent } from './pages/containers-for-sales/containers-for-sales.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { HowAndWhyComponent } from './pages/how-and-why/how-and-why.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetQuoteComponent } from './pages/get-quote/get-quote.component';
import { ThanksYouComponent } from './pages/thanks-you/thanks-you.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'containers-for-sales', component: ContainersForSalesComponent  },
  { path: 'product-info', component: ProductInfoComponent },
  { path: 'how-and-why', component: HowAndWhyComponent },
  { path: 'thanks-you', component: ThanksYouComponent  },
  { path: 'contact', component: ContactComponent },
  { path: 'get-a-quote', component: GetQuoteComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
  useHash: false,
  scrollPositionRestoration: 'enabled'
});

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ProductsComponent } from './components/products/products/products.component';

export const routes: Routes = [
    {
        // path:'',component:HomeComponent
        path:'',component:ProductsComponent
    }
];

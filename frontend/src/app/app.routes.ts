import { Routes } from '@angular/router';
import { ZeneComponent } from './zene/zene.component';
import { ZenekComponent } from './zenek/zenek.component';

export const routes: Routes = [
    {path : "",redirectTo:"zenek",pathMatch:"full"},
    {path: "zenek",component:ZenekComponent},
    { path: 'zenek/:id', component: ZeneComponent },
];

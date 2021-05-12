import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthComponent } from '../auth/auth.component';
import { LoginsComponent } from '../logins/logins.component';
import { ListAuteurComponent } from './auteur-mgmnt/list-auteur/list-auteur.component';
import { FormAuteurComponent } from './auteur-mgmnt/form-auteur/form-auteur.component';
import { EditAuteurComponent } from './auteur-mgmnt/edit-auteur/edit-auteur.component';
import { DetailAuteurComponent } from './auteur-mgmnt/detail-auteur/detail-auteur.component';
import { DetailTypeComponent } from './type-mgmnt/detail-type/detail-type.component';
import { EditTypeComponent } from './type-mgmnt/edit-type/edit-type.component';
import { FormTypeComponent } from './type-mgmnt/form-type/form-type.component';
import { ListTypeComponent } from './type-mgmnt/list-type/list-type.component';
 
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  //canActivate :[AuthGuardService],
  children: [
    {
      path: 'list-type',
      component: ListTypeComponent,
    },
    {
      path: 'form-type',
      component: FormTypeComponent,
    },
    {
      path: 'edit-type/:id',
      component: EditTypeComponent,
    },
    {
      path: 'detail-type',
      component: DetailTypeComponent,
    },
    {
      path: 'list-auteur',
      component: ListAuteurComponent,
    },
    {
      path: 'form-auteur',
      component: FormAuteurComponent,
    },
    {
      path: 'edit-auteur/:id',
      component: EditAuteurComponent,
    },
    {
      path: 'detail-auteur',
      component: DetailAuteurComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
  
     {
      path: 'ttt',
      component: LoginsComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

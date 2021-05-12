import { NgModule } from '@angular/core';
import {
  NbAccordionModule,
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbPopoverModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSelectModule,
  NbStepperModule,
  NbTabsetModule, NbTooltipModule, NbUserModule, NbWindowModule, NbButtonModule, NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DialogModule } from 'primeng/dialog';
import { DetailTypeComponent } from './type-mgmnt/detail-type/detail-type.component';
import { EditTypeComponent } from './type-mgmnt/edit-type/edit-type.component';
import { FormTypeComponent } from './type-mgmnt/form-type/form-type.component';
import { ListTypeComponent } from './type-mgmnt/list-type/list-type.component';
import { DetailAuteurComponent } from './auteur-mgmnt/detail-auteur/detail-auteur.component';
import { EditAuteurComponent } from './auteur-mgmnt/edit-auteur/edit-auteur.component';
import { FormAuteurComponent } from './auteur-mgmnt/form-auteur/form-auteur.component';
import { ListAuteurComponent } from './auteur-mgmnt/list-auteur/list-auteur.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { FormsRoutingModule } from './forms/forms-routing.module';
import { ModalOverlaysRoutingModule } from './modal-overlays/modal-overlays-routing.module';
  
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    DialogModule,
    NbCardModule,
    NbButtonModule,
    DataTablesModule,
    FormsModule, 
    ReactiveFormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbListModule,
    NbAccordionModule,  
    NbUserModule,
    LayoutRoutingModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    NbPopoverModule,    
    ModalOverlaysRoutingModule,
  ],
  declarations: [
    PagesComponent,
    DetailTypeComponent,
    EditTypeComponent,
    FormTypeComponent,
    ListTypeComponent,
    DetailAuteurComponent,
    EditAuteurComponent,
    FormAuteurComponent,
    ListAuteurComponent
   ],
})
export class PagesModule {
}

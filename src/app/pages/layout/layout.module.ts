import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
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
  NbTabsetModule, NbTooltipModule, NbUserModule, NbWindowModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NewsService } from './news.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DialogModule } from 'primeng/dialog';
import { DataTablesModule } from 'angular-datatables';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ListFilmComponent } from './film-mgmnt/list-film/list-film.component';
import { FormFilmComponent } from './film-mgmnt/form-film/form-film.component';
import { EditFilmComponent } from './film-mgmnt/edit-film/edit-film.component';
import { DetailFilmComponent } from './film-mgmnt/detail-film/detail-film.component';
import { ModalOverlaysRoutingModule } from '../modal-overlays/modal-overlays-routing.module';

@NgModule({
  imports: [
    DataTablesModule,
    DialogModule,
    FormsModule, 
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,  
    NbUserModule,
    LayoutRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
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
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbTooltipModule
  ],
  declarations: [
    LayoutComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    StepperComponent,
    ListComponent,
    NewsPostPlaceholderComponent,
    InfiniteListComponent,
    NewsPostComponent,
    AccordionComponent,
    ListFilmComponent,
    FormFilmComponent,
    EditFilmComponent,
    DetailFilmComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../@core/data/smart-table';
import { auteur } from '../../../models/auteur';
import { AuteurService } from '../../../utils/services/auteur.service';
import { NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent } from '../../modal-overlays/popovers/popover-examples.component';

@Component({
  selector: 'ngx-list-auteur',
  templateUrl: './list-auteur.component.html',
  styleUrls: ['./list-auteur.component.scss']
})
export class ListAuteurComponent implements OnInit {


  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
  auteur: auteur[] = [];
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: SmartTableData, private auteurService: AuteurService, 
    private r: Router, private ar: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4
    };

    this.auteurService.getlistAuteur().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.auteur = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentauteur: auteur;

  details(u: auteur) {
    this.currentauteur = u;
    this.displayBasic = true;
  }

  modifier(u: auteur) {
    this.r.navigate(['/pages/edit-auteur/' + u.id]);
    console.log(u);
  }
  
  ajouter() {
    this.r.navigate(['/pages/form-auteur/']);
  }

  delete(p: auteur) {
    if (window.confirm("êtes-vous sûr suprrimer le auteur " + p.nom + " ?")) {
      this.auteurService.deleteAuteur(p.id).subscribe(res => {
        this.auteurService.getlistAuteur().subscribe(res => {
          this.auteur = res;
        });
      })
    }
  }
}



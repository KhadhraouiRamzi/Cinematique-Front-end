import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../@core/data/smart-table';
import { type } from '../../../models/type';
import { TypeService } from '../../../utils/services/type.service';
import { NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent } from '../../modal-overlays/popovers/popover-examples.component';

@Component({
  selector: 'ngx-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent implements OnInit {

  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
  type: type[] = [];
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

  constructor(private service: SmartTableData, private typeService: TypeService, 
    private r: Router, private ar: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4
    };

    this.typeService.getlistType().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.type = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currenttype: type;

  details(u: type) {
    this.currenttype = u;
    this.displayBasic = true;
  }

  modifier(u: type) {
    this.r.navigate(['/pages/edit-type/' + u.id]);
    console.log(u);
  }
  
  ajouter() {
    this.r.navigate(['/pages/form-type/']);
  }

  delete(p: type) {
    if (window.confirm("êtes-vous sûr suprrimer le type " + p.nom + " ?")) {
      this.typeService.deleteType(p.id).subscribe(res => {
        this.typeService.getlistType().subscribe(res => {
          this.type = res;
        });
      })
    }
  }
}



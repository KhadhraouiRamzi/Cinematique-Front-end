import { Component, OnInit, ViewChild  } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { films } from '../../../../models/films';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { FilmsService } from '../../../../utils/services/films.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPopoverCardComponent, 
  NgxPopoverFormComponent, 
  NgxPopoverTabsComponent } from '../../../modal-overlays/popovers/popover-examples.component';

@Component({
  selector: 'ngx-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
  films: films[] = [];
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

  constructor(private service: SmartTableData, private filmsService: FilmsService, 
    private r: Router, private ar: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4
    };

    this.filmsService.getlistFilms().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.films = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentfilms: films;

  details(u: films) {
    this.currentfilms = u;
    this.displayBasic = true;
  }

  modifier(u: films) {
    this.r.navigate(['/pages/layout/edit-film/' + u.id]);
    console.log(u);
  }
  
  ajouter() {
    this.r.navigate(['/pages/layout/form-film/']);
  }

  delete(p: films) {
    if (window.confirm("êtes-vous sûr suprrimer le film " + p.title + " ?")) {
      this.filmsService.deleteFilms(p.id).subscribe(res => {
        this.filmsService.getlistFilms().subscribe(res => {
          this.films = res;
        });
      })
    }
  }
}



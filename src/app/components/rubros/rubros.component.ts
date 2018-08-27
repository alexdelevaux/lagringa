import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RubrosService } from '../../services/rubros.service';
import { Rubros } from '../../models/rubros';


@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.scss']
})
export class RubrosComponent implements OnInit {


  rubros: Rubros[];

  goBack(): void {
    this.location.back();
  }


  constructor(private rubroService: RubrosService, private location: Location) { }

  ngOnInit() {
      this.rubroService.getRubros().then(rubros => this.rubros = rubros);
  }

}

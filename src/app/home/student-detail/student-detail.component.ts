import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DbService } from '../db.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: []
})
export class StudentDetailComponent implements OnInit {
id;item;
constructor(private dbService: DbService, private route: ActivatedRoute) {
    route.params.subscribe(params=>{this.id=params['id'];})
    this.item = this.dbService.getData().filter(item => item.id === this.id)[0];
}

  ngOnInit() {

  }

}

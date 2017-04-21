import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  myStudentList;
  test = "TEST Data";
  constructor(private DbService: DbService) {
    this.myStudentList = DbService.getData();
   }
  
  ngOnInit() {
    
  }

}

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { DbService } from './db.service';
@Injectable()
export class MyCanActivateComponent implements CanActivate {
  constructor(private dbService: DbService, private router: Router ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ): Observable<boolean> | boolean {
    let item=this.dbService.getData().filter(item => item.id === route.params['id']);
    console.log(route.params['id']);
    if(item.length>0){
      
      return true;
    }
    this.router.navigate(['error'])
    console.log("Error Arises");
    return false;
  }
}

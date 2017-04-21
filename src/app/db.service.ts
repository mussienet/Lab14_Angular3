import { Injectable } from '@angular/core';

export class DbService {
    student = 
            [
                {id: "11",  name: "Mussie Kahsai",  email: "abc@yahoo.com"},
                {id: "22",  name: "Dawit Kidane",  email: "def@yahoo.com"},
                {id: "33",  name: "Solomon Tesfai",  email: "ghi@yahoo.com"},
                {id: "44",  name: "Temesghen Mussie",  email: "klm@yahoo.com"},
                {id: "55",  name: "Senai Mussie",  email: "nop@yahoo.com"},
                {id: "66",  name: "Kidane Adonai",  email: "qrs@yahoo.com"},
                {id: "77",  name: "Sara Tesfai",  email: "tuv@yahoo.com"},
                {id: "88",  name: "Nebiat Ghebre",  email: "wxy@yahoo.com"},
                {id: "99",  name: "Hiwet Kifle",  email: "zab@yahoo.com"},
                {id: "10",  name: "Saba Tewelde",  email: "zabc@yahoo.com"},
                {id: "8",  name: "Semira Tesfai",  email: "zabcd@yahoo.com"},
                {id: "7",  name: "Feven Tafie",  email: "zabcde@yahoo.com"},
                {id: "6",  name: "Sami Mehari",  email: "zabcdef@yahoo.com"},
            ];
    constructor() {
    
     }

    getData(){
      return this.student;
    }
    
}

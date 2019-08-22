import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-bookrequest',
  templateUrl: './bookrequest.component.html',
  styleUrls: ['./bookrequest.component.css']
})
export class BookrequestComponent implements OnInit {

  myForm;
 
  delRow;
  ELEMENT_DATA: any = [];
  
  displayedColumns: string[] = ['SrNo', 'bookTitle', 'Author', 'Published','Language','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
 @ViewChild(MatSort,{static:true}) sort: MatSort;

 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(element){
    console.log(element);
    this.delRow = this.ELEMENT_DATA.indexOf(element);
    this.ELEMENT_DATA.splice(this.delRow,1);
    console.log(this.ELEMENT_DATA);

} 
}

export interface PeriodicElement {
  bookTitle: string;
  Language;
  SrNo: number;
  Author:string;
  action:string;
  Published;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SrNo: 1, bookTitle: 'Hydrogen',  Author: 'H',Published:'a',Language:'',action:""},
  {SrNo: 2, bookTitle: 'Helium', Author: 'He',Published:'a',Language:'',action:""},
  {SrNo: 3, bookTitle: 'Lithium', Author: 'Li',Published:'a',Language:'',action:""},
  {SrNo: 4, bookTitle: 'Beryllium', Author: 'Be',Published:'a',Language:'',action:""},
  {SrNo: 5, bookTitle: 'Boron', Author: 'B',Published:'a',Language:'',action:""},
  {SrNo: 6, bookTitle: 'Carbon',  Author: 'C',Published:'a',Language:'',action:""},
  {SrNo: 7, bookTitle: 'Nitrogen',  Author: 'N',Published:'a',Language:'',action:""},
  {SrNo: 8, bookTitle: 'Oxygen',  Author: 'O',Published:'a',Language:'',action:""},
  {SrNo: 9, bookTitle: 'Fluorine',  Author: 'F',Published:'a',Language:'',action:""},
  {SrNo: 10, bookTitle: 'Neon',  Author: 'Ne',Published:'a',Language:'',action:""},
  {SrNo: 11, bookTitle: 'Sodium',Author: 'Na',Published:'a',Language:'',action:""},
  {SrNo: 12, bookTitle: 'Magnesium',  Author: 'Mg',Published:'a',Language:'',action:""},
  {SrNo: 13, bookTitle: 'Aluminum',  Author: 'Al',Published:'a',Language:'',action:""},
  {SrNo: 14, bookTitle: 'Silicon',  Author: 'Si',Published:'a',Language:'',action:""},
  {SrNo: 15, bookTitle: 'Phosphorus',  Author: 'P',Published:'a',Language:'',action:""},
  {SrNo: 16, bookTitle: 'Sulfur',  Author: 'S',Published:'a',Language:'',action:""},
  {SrNo: 17, bookTitle: 'Chlorine',  Author: 'Cl',Published:'a',Language:'',action:""},
  {SrNo: 18, bookTitle: 'Argon',  Author: 'Ar',Published:'a',Language:'',action:""},
  {SrNo: 19, bookTitle: 'Potassium',  Author: 'K',Published:'a',Language:'',action:""},
  {SrNo: 20, bookTitle: 'Calcium', Author: 'Ca',Published:'a',Language:'',action:""},
];
              

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

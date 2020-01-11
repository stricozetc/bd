import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
}

@Component({
  selector: 'app-welding-table',
  templateUrl: './welding-table.component.html',
  styleUrls: ['./welding-table.component.scss']
})
export class WeldingTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {
    const weldingArray = JSON.parse(localStorage.getItem('welding'));
    this.dataSource = new MatTableDataSource(weldingArray);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

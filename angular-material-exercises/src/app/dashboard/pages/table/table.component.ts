import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface Personas {
  id: number;
  nombre: string;
  edad: number;
}

const DATA: Personas[] = [
  { id: 1, nombre: 'Lucas Fernández', edad: 30 },
  { id: 2, nombre: 'Ana Pérez', edad: 27 },
  { id: 3, nombre: 'Carlos Jiménez', edad: 35 },
  { id: 4, nombre: 'Sofía Morales', edad: 29 },
  { id: 5, nombre: 'Rafael Gómez', edad: 42 },
  { id: 6, nombre: 'Marta Rodríguez', edad: 31 },
  { id: 7, nombre: 'Iván Díaz', edad: 28 },
  { id: 8, nombre: 'Claudia Torres', edad: 33 },
  { id: 9, nombre: 'Roberto Castro', edad: 26 },
  { id: 10, nombre: 'Valeria Ortega', edad: 24 },
  { id: 11, nombre: 'Jorge Martínez', edad: 32 },
  { id: 12, nombre: 'Laura Ramírez', edad: 25 },
];


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './table.component.html',
})

export default class TableComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['id', 'nombre', 'edad'];
  dataSource = new MatTableDataSource<Personas>(DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sort.sortChange.subscribe((sortState: Sort) => {
      this.announceSortChange(sortState);
    });

    this.dataSource.filterPredicate = (data: Personas, filter: string) => {
      return data.nombre.toLowerCase().includes(filter);
    };
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: User[] =[];

  displayedColumns: string[] = ['documento', 'nombre', 
  'apellido', 'correo', 'celular', 'direccion', 'acciones'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.cargarUsers();
  }

  cargarUsers() {
    this.listUsers = this.userService.getUser();
    this.dataSource = new MatTableDataSource(this.listUsers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  eliminarUser(index: number){
    console.log(index);

    this.userService.eleminarUser(index);
    this.cargarUsers();

    this._snackBar.open('Cliente Eleminado con Exito :)', '',{
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
  });
  }
}

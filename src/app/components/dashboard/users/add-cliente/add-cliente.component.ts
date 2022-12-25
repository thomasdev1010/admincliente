import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, 
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      documento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  ngOnInit(): void{
  }
  agregarCliente(){

    const user: User = {
      documento: this.form.value.documento,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      celular: this.form.value.celular,
      correo: this.form.value.email,
      direccion: this.form.value.direccion,
    }
    this.userService.agregarCliente(user);
    this.router.navigate(['/dashboard/users']);

    this._snackBar.open('Cliente Creado con Exito :)', '',{
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
  });
  }
}

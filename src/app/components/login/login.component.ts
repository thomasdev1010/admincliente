import { validateHorizontalPosition, validateVerticalPosition } from '@angular/cdk/overlay';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loging = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, 
    private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void{
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'admin' && password == '1234'){
      //Entrar
      this.fakeLoging();
    }else{
      //Error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o Contraseña Invalido', '',{
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
  });
  }

  fakeLoging(){
    this.loging = true;
    setTimeout(() => {

      this.router.navigate(['dashboard'])
    }, 2000);
  }

}

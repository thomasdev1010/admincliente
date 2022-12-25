import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-see-cliente',
  templateUrl: './see-cliente.component.html',
  styleUrls: ['./see-cliente.component.css']
})
export class SeeClienteComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder ) {
    this.form = this.fb.group({
    })
  }

  ngOnInit(): void{
  }

}

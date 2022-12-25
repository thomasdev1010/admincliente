import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder ) {
    this.form = this.fb.group({
    })
  }

  ngOnInit(): void{
  }

}

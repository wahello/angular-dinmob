import { Component, OnInit, Inject } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-editar-pago-comision-dialogo',
  templateUrl: './editar-pago-comision-dialogo.component.html',
  styleUrls: ['./editar-pago-comision-dialogo.component.scss']
})
export class EditarPagoComisionDialogoComponent implements OnInit {
  numberMask = createNumberMask({
    allowDecimal: true,
    prefix: '',
    decimalLimit: 2
  });
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarPagoComisionDialogoComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      monto: [data.pago.monto, Validators.required],
      fecha: [moment(data.pago.fecha), Validators.required],
      destinatario: [data.pago.destinatario, Validators.required],
    });
  }

  ngOnInit() {
  }

}
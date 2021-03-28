import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

	texto1: string = 'Gaston Khouri';
	color: string = 'red';

	miFormulario: FormGroup = this.fb.group({
		nombre: ['', [Validators.required]]
	})

  constructor(private fb: FormBuilder) { }

  cambiarNombre() {
  	this.texto1 = Math.round(Math.random()*100).toString();
  }

  cambiarColor() {
  	const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  	this.color = color;
  }

  tieneError(campo: string): boolean {
  	return this.miFormulario.get(campo)?.invalid || false;
  }

}

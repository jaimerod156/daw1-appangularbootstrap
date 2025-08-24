import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-imc.component.html',
  styleUrl: './form-imc.component.scss'
})
export class FormImcComponent {
  
  imc = {
    nombre: "",
    peso: null,
    talla: null,
    valor: 0,
    diagnostico: ""
  }

  mostrarResultado = false;
  pacientes: Paciente = [];

  calcularImc(){
    this.imc.valor = Number(this.imc.peso) / (Number(this.imc.talla) * Number(this.imc.talla))
    this.imc.diagnostico = this.diagnosticoImc(Number(this.imc.valor))
    this.pacientes.push({
      nombre: this.imc.nombre,
      valorimc: Number(this.imc.valor),
      diagnostico: this.imc.diagnostico
    })
    this.mostrarResultado = true;
  }

  diagnosticoImc(valor: number): string{
       let resultado = "";
      if(this.imc.valor < 18.5){
        resultado =  "Bajo peso";
      }else if(this.imc.valor >= 18.5 && this.imc.valor < 24.9){
        resultado = "Peso normal";
      }else if(this.imc.valor >= 25 && this.imc.valor < 29.9){
        resultado = "Sobrepeso";
      }else if(this.imc.valor >= 30 && this.imc.valor < 34.9){
        resultado = "Obesidad grado 1";
      }else{
        resultado = "Obesidad grado 2 o más";
      }

      return resultado;
  }
}

type Paciente = Array<{nombre:string, valorimc:number, diagnostico: string}>;
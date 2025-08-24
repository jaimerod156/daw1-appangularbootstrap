import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  titulo = "Desarrollo de Aplicaciones Web 1"
  contador = 0;

  producto = {
    nombre : 'Producto A',
    email: 'jjaime.rr@email.com',
    image: "https://dummyimage.com/100"
  }

  constructor(){
    setInterval(() =>{
      this.contador = this.contador + 1
    }, 2000)
  }

  metodoInicio() {
      this.titulo ="Componentes Angular";
      this.contador = 0;
  }
}

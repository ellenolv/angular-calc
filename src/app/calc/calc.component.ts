import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
 //Atributos da classe/componente
  num1 : number = 0;
  num2 : number = 0;
  soma : number = 0;

  //para que seja uma variavel voce precisa declarar dentro do metodo
  somar(){
    this.soma = this.num1+this.num2;//o this é usado caso queira usar atributos
    //caso eu decalre a variavel dentro do metodo, eu não preciso usar o this, ele só é util caso voce queira pegar do atributo(diferente de java)
  }
}

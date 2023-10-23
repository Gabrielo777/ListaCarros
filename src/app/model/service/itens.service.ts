import { Injectable } from '@angular/core';
import { Itens } from '../entities/itens/Itens';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  public listaCarros : Itens[] = [];
  constructor() {
    let i1 :Itens = new Itens("Jetta");
    this.listaCarros.push(i1);

    let i2 :Itens = new Itens("S3");
    this.listaCarros.push(i2);

    let i3 :Itens = new Itens("M235");
    this.listaCarros.push(i3);

    let i4 :Itens = new Itens("A45");
    this.listaCarros.push(i4);
  }

  cadastrar(item : Itens){
    this.listaCarros.push(item);
  }

  obterTodos() : Itens[]{
    return this.listaCarros;
  }

  obterPorIndice(indice : number) : Itens{
    return this.listaCarros[indice];
  }

  atualizar(indice : number, novo : Itens){
    this.listaCarros[indice] = novo;
  }

  deletar(indice : number){
    this.listaCarros.splice(indice, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Itens } from 'src/app/model/entities/itens/Itens';
import { ItensService } from 'src/app/model/service/itens.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  indice! : number;
  nome! : string;
  ano! : number;
  montadora! : string;
  tipocarro! : number;
  tracao! : number;
  item! : Itens;
  edicao: boolean = true;
  firebase: any;

  constructor(private actRoute: ActivatedRoute, private ItemService : ItensService, private router : Router, private alertController: AlertController) {

  }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
        this.indice = parametros["indice"];
      }
    })
    this.item = this.ItemService.obterPorIndice(this.indice);
    this.nome = this.item.nome;
    this.ano = this.item.ano;
    this.montadora = this.item.montadora;
    this.tipocarro = this.item.tipocarro;
    this.tracao = this.item.tracao;
  }

  habilitar(){
    if (this.edicao){
      this.edicao = false;
    }else {
      this.edicao = true;
    }
  }

  editar(){
    if (this.nome){
      let novo: Itens = new Itens(this.nome);
      novo.ano = this.ano;
      novo.montadora = this.montadora;
      novo.tipocarro = this.tipocarro;
      novo.tracao = this.tracao;
      this.firebase.editar(novo, this.item.id)
      .then(()=>{this.router.navigate(["/home"]);})
      .catch((error: any)=>{
        console.log(error);
        this.presentAlert("Erro", "Erro ao Atualizar Item");
      })
    }else {
      this.presentAlert("Erro", "Todos Campos são obrigatório!");
    }
  }

  excluir(){
    this.presentConfirmAlert("ATENÇÃO", "Deseja realmente excluir esse carro?")
  }

  excluirItem(){
    this.ItemService.deletar(this.indice);
    this.router.navigate(["/home"]);
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Lista de Carros',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentConfirmAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Lista de Carros',
      subHeader: subHeader,
      message: message,
      buttons: [
        {text: 'Cancelar', role: 'cancelar', handler: ()=>{console.log("cancelou")}},
        {text: 'Confirmar', role: 'confirmar', handler: (acao)=>{this.excluirItem()}},
      ],
    });
    await alert.present();
  }

}

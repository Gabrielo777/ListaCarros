import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Itens } from 'src/app/model/entities/itens/Itens';
import { ItensService } from 'src/app/model/service/itens.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome! : string;
  ano! : number;
  montadora! : string;
  tipocarro! : number;
  tracao! : number;
  firebase: any;
  
  constructor(private alertController: AlertController,
    private router : Router, private ItensService : ItensService){
      
    }
  
  ngOnInit() {

  }

  cadastro(){
    if(this.nome){
      if(this.nome.length >= 3){
        let novo : Itens = new Itens(this.nome);
        novo.ano = this.ano;
        novo.montadora = this.montadora;
        novo.tipocarro = this.tipocarro;
        novo.tracao = this.tracao;
        this.firebase.cadastrar(novo).then(() => this.router.navigate(["/home"])).catch((error: any) =>{
        console.log(error);
        this.presentAlert("Erro", "Erro ao salvar contato!");
        })
      }else {
        this.presentAlert("Erro", "Nome precisa de no mínimo 1 caracteres!");
      }
    }else {
      this.presentAlert("Erro", "Todos campos são obrigatório!");
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Carros',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}

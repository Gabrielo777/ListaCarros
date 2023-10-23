export class Itens {
    id(novo: Itens, id: any) {
      throw new Error('Method not implemented.');
    }
    private _nome : string;
    private _ano! : number;
    private _montadora! : string;
    private _tipocarro! : number;
    private _tracao! : number;

    constructor(nome : string){
        this._nome = nome;
    }


    public get nome() : string {
        return this._nome;
    }
    public set nome(nome: string){
        this._nome = nome;
    }


    public get ano() : number {
        return this._ano;
    }
    public set ano(ano: number){
        this._ano = ano;
    }


    public get montadora() : string {
        return this._montadora;
    }
    public set montadora(montadora: string){
        this._montadora = montadora;
    }
    

    public get tipocarro() : number {
        return this._tipocarro;
    }
    public set tipocarro(tipocarro: number){
        this._tipocarro = tipocarro;
    }

    
    public get tracao() : number {
        return this._tracao;
    }
    public set tracao(tracao: number){
        this._tracao = tracao;
    }
}
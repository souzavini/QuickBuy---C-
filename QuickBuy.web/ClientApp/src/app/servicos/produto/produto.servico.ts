import { Injectable,Inject, inject, OnInit } from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import {Produto} from "../../modelo/produto"

@Injectable({
    providedIn: "root"
})


export class ProdutoServico implements OnInit{
    
    private _baseurl: string
    public produtos: Produto[];

    constructor(private http: HttpClient, @Inject('BASE_URL') baseurl:string){
        this._baseurl = baseurl;
    }
    ngOnInit(): void {
        this.produtos = [];
    }
    
    get headers(): HttpHeaders{
        return new HttpHeaders().set('content-type', 'application/json');
    }

    public cadastrar(produto: Produto): Observable<Produto>{

        return this.http.post<Produto>("https://localhost:44356/" + "api/produto/cadastrar" ,JSON.stringify(produto),{ headers: this.headers });

    }

    public salvar(produto: Produto): Observable<Produto>{


        return this.http.post<Produto>("https://localhost:44356/" + "api/produto/salvar" ,JSON.stringify(produto),{ headers: this.headers });
    }

    public deletar(produto: Produto): Observable<Produto>{


        return this.http.post<Produto>("https://localhost:44356/" + "api/produto/deletar" ,JSON.stringify(produto),{ headers: this.headers });
    }

    public obterTodosProdutos(): Observable<Produto[]>{

        return this.http.get<Produto[]>("https://localhost:44356/" + "api/produto/");
    }

    public obterProduto(produtoId: number): Observable<Produto>{

        return this.http.get<Produto>("https://localhost:44356/" + "api/produto/");
    }


}
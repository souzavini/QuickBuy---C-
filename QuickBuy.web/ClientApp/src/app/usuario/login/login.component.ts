import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/modelo/usuario";
import { Router, ActivatedRoute} from "@angular/router"


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: [ "./login.component.css" ]
})
export class LoginComponent implements OnInit {
    public returnUrl: string;
    public usuario;

    constructor(private router: Router, private activatedRouter:ActivatedRoute){
        
    }

    ngOnInit(): void {
        this.usuario = new Usuario();
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    }

    
   
   
    entrar(): void{
        alert(this.returnUrl)
        if(this.usuario.email =="leo@teste.com" && this.usuario.senha =="abc123"){
           sessionStorage.setItem("usuario-autenticado","1");
           this.router.navigate([this.returnUrl]);
        }
    }
    
}
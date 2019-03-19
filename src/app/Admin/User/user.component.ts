import { Component } from '@angular/core';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent {
  nome = '';
  idade = '';
  cpf = '';
  permissao = '';
  senha = '';
  users:any= []

  ngOnInit() {
    
  }
  saveUser(){
    var user= {
      nome : this.nome,
      idade: this.idade,
      cpf: this.cpf,
      permissao: this.permissao,
      senha: this.senha
    }
    console.log("user", user)
    this.users.push(user)
    localStorage.setItem('Users', this.users);
  }
}

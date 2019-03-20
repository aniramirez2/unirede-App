import { Component, OnInit } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit  {
  nome = '';
  idade = '';
  cpf = '';
  permissao = '';
  senha = '';
  users:any= []
  user:any=''
  isEdit = false
  isNew = false
  editUser:any ={}
  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("id",params['id'])
        if(params['id'] !=  'new'){
          var aux =  JSON.parse(window.localStorage.getItem('Users'))
          var find = aux.find(user=>{
            if(user.cpf == params['id']){
              return user
            }
          })
          this.isEdit = true
          this.editUser =find
          if(this.isEdit == true){
            this.nome = this.editUser.nome
            this.idade = this.editUser.idade
            this.cpf = this.editUser.cpf
            this.permissao = this.editUser.permissao
            this.senha = this.editUser.senha
          }
        }else{
          this.users = JSON.parse(window.localStorage.getItem('Users'))
          this.isNew = true
        }       
      
       }
    )
  }
  cancel(){
    this.router.navigate(['/']);
  }
  editUsuario(){
    this.user= {
      nome :   this.nome,
      idade:  this.idade,
      cpf: this.cpf,
      permissao: this.permissao,
      senha:this.senha
    }
    this.users = JSON.parse(window.localStorage.getItem('Users'))
    var index = this.users.findIndex(x => x.cpf === this.user.cpf);
    this.users.splice(index, 1)
    this.users.push(this.user)
    localStorage.setItem('Users',JSON.stringify(this.users));
    Swal.fire({
      title: 'Sucesso',
      text: "Usuario atualizado com sucesso",
      type: 'success',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/']);
      } 
    })
  }
  saveUser(){
    this.user= {
      nome :   this.nome,
      idade:  this.idade,
      cpf: this.cpf,
      permissao: this.permissao,
      senha:this.senha
    }
    this.users.push(this.user)
    localStorage.setItem('Users',JSON.stringify(this.users));
    
    Swal.fire({
      title: 'Sucesso',
      text: "Usuario adicionoado com sucesso",
      type: 'success',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/']);
      } 
    })
  }
}

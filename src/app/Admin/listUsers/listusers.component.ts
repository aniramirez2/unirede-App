import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './listusers.component.html',
  styleUrls: []
})
export class ListUsersComponent implements OnInit  {
  users:any = [];

  ngOnInit(){
    this.users= JSON.parse(window.localStorage.getItem('Users'))
    console.log("len", this.users)
  }
  removeUser(cpf){
    Swal.fire({
      title: 'Tem certeza que quer deletar o usuário?',
      text: 'Depois não terá como recuperar o registro',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Não deletar'
    }).then((result) => {
      if (result.value) {
        var index = this.users.findIndex(x => x.cpf === cpf);
        this.users.splice(index, 1)
        localStorage.setItem('Users',JSON.stringify(this.users));
        this.ngOnInit()
        console.log("cpf index", index)
        Swal.fire(
          'Removido',
          'com sucesso',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private authService: AuthService) { }

  login() {
    console.log("Login");
    console.log(this.email, this.password);


    // this.authService.createAcount(this.email, this.password)
    //   .subscribe(value => {
    //     alert("Usuario criado com sucesso");
    //     console.log(value);
    //   });
    this.authService.login(this.email, this.password)
      .subscribe(
        (value: any) => {
          alert('Usuário logado com sucesso');
          console.log(value);
          localStorage.setItem('token', value.idToken);

          this.authService.setUser({
            email: value.email,
            id: value.localId
          });
        },
        (error) => {
          console.log(error);
          switch (error.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              alert('E-mail não encontrado');
              break;
            case 'INVALID_PASSWORD':
              alert('Senha inválida');
              break;
            default:
              alert('Houve um erro');
              break;
          }
        });

  }

  ngOnInit() {
  }

}

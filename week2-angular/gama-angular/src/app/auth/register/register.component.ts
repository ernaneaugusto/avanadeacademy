import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = "";
  password = "";
  confirmPassword = "";

  constructor(private authService: AuthService) { }

  registrar() {
    console.log("Registrar");
    console.log(this.email, this.password, this.confirmPassword);

    if (this.password !== this.confirmPassword) {
      alert("Senhas não são iguais");
      return;
    }

    this.authService.createAcount(this.email, this.password)
      .subscribe((value: any) => {
        alert("Usuario criado com sucesso");
        console.log(value);

        localStorage.setItem('token', value.idToken);

        this.authService.setUser({
          email: value.email,
          id: value.localId
        });
      });

  }

  ngOnInit() {
  }

}

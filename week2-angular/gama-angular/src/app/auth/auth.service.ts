import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  private pPassFiresabe: string = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCarOBQt0I6PwZHsLaxiQBrBJ6lUHFd7uo';
  private pLoginFiresabe: string = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCarOBQt0I6PwZHsLaxiQBrBJ6lUHFd7uo';

  //   https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=[API_KEY]

  // createAccount(): https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCarOBQt0I6PwZHsLaxiQBrBJ6lUHFd7uo

  // login(): https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]


  constructor(private httpClient: HttpClient) { }

  login(email, password) {
    return this.httpClient.post(this.pLoginFiresabe, {
      email,
      password
    });
  }
  createAcount(email, password) {
    return this.httpClient.post(this.pPassFiresabe, {
      email,
      password
    });
  }
  logout() {
    
  }
  setUser(user) {
    this.pUser.next(user);
  }
  verifyToken(token) {
    return this.httpClient.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCarOBQt0I6PwZHsLaxiQBrBJ6lUHFd7uo", {
      idToken: token
    });
  }
}

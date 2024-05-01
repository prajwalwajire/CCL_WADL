import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  login() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((p: any) => p.email === this.email && p.password === this.password);
    if (user) {
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid Credentials');
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string = "";
  email: string = "";
  password: string = "";

  formData: any = {
    name: this.name,
    email: this.email,
    password: this.password,
  }

  constructor(private router: Router) { }


  Register() {
    console.log(this.formData);
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.formData);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);
  }
}

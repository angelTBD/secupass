import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  username: string = "";
  password: string = "";
  correo: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  register() {
    const registerData = {
      username: this.username,
      password: this.password,
      correo: this.correo
    };

    this.http.post('https://proyecto-webintegral.onrender.com/users/register', registerData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar:', error);
      }
    );
  }

  ngOnInit() {
  }

}

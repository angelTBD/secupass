import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };
  
    this.http.post('https://proyecto-webintegral.onrender.com/users/login', loginData, {
      headers: {
        'Content-Type': 'application/json'  // Asegúrate de que el backend acepte este tipo de contenido
      }
    }).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        // Redirigir a la página deseada, por ejemplo
        this.router.navigate(['/generar']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Mostrar un mensaje de error al usuario
      }
    );
  }

  ngOnInit() {
  }

}

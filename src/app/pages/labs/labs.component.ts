import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = ['Instalar el Angular CLI', 'Crear proyecto', 'Crear componente'];
  name = 'Edgardo';
  age = 21;
  disable = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Edgardo',
    age: '21',
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };
}

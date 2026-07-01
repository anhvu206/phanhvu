import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Hello from App Component';
  name = 'Phạm Anh Vũ';
  age = 20;

  sayHello() {
    alert('Hello from App Component');
  }

  delete() {
    console.log('Delete button clicked');
  }
}

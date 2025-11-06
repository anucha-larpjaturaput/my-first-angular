import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloChild } from "./hello-child/hello-child";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HelloChild],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  protected readonly title = signal('my-first-angular');

  name = signal(''); // <--- เพิ่มบรรทัดนี้
}
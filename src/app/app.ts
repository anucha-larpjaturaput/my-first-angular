import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true, //เพิ่มบรรทัดนี้ไว้ด้วย
})
export class App {
  protected readonly title = signal('my-first-angular');
}
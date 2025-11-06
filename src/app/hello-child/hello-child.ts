import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-child',
  standalone: true,
  templateUrl: './hello-child.html',
  styleUrl: './hello-child.css'
})
export class HelloChild {
  @Input() name= ''; // รับค่าจาก parent

}

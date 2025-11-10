import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-child',
  standalone: true,
  templateUrl: './hello-child.html',
  styleUrl: './hello-child.css'
})
export class HelloChild {
  @Input() name = ''; // รับค่าจาก parent
 @Output() nameChanged = new EventEmitter<string>();

sendBack() {
  const newName = `${this.name} (ส่งกลับจากลูก 👶🚀)`;
  this.nameChanged.emit(newName);
}

}
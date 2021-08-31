import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() onToggleAddTask = new EventEmitter();
  @Input() color: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    this.onToggleAddTask.emit();
  }
}

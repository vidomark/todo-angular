import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleTask = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  toggleTask(task: Task) {
    this.onToggleTask.emit(task);
  }
}

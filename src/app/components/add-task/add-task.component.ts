import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter();
  text: string;
  day: string;
  reminder = false;
  showAddTask: boolean;

  constructor(uiService: UiService) {
    uiService
      .getShowAddTask()
      .subscribe((showAddTask) => (this.showAddTask = showAddTask));
  }

  ngOnInit(): void {}

  addTask(): void {
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // Emit event
    this.onAddTask.emit(newTask);
    console.log(newTask);
    // Reset form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

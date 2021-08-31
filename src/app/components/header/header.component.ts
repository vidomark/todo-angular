import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask: boolean;

  constructor(private uiService: UiService) {
    // Subscription
    uiService
      .getShowAddTask()
      .subscribe((showAddTask) => (this.showAddTask = showAddTask));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}

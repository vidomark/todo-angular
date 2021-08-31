import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.taskUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}

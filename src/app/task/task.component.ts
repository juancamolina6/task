import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servise/api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  data: any[] = [];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(): void {
    this.apiService.getData('/tasks').subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}

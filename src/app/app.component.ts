import { Component, OnInit } from '@angular/core';
import { ThreadService } from './services/thread.service';
import { Thread } from './models/thread.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  threads: Thread[][];

  constructor(private threadService: ThreadService) {}

  ngOnInit() {
    this.threadService.getThreads().subscribe(data => {
      this.threads = data.threads;
    },
    error => {
      console.error('Error fetching threads:', error);
    });
  }
}

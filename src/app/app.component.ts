import { Component, OnInit } from '@angular/core';
import { ThreadService } from './services/thread.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  threads: any[][];

  constructor(private threadService: ThreadService) {}

  ngOnInit() {
    this.threadService.getThreads().subscribe(data => {
      this.threads = data.threads;
    });
  }
}

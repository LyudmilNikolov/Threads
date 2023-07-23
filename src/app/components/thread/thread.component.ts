import { Component, Input, OnInit } from '@angular/core';
import { CustomDatePipe } from './custom-data.pipe';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
  providers: [CustomDatePipe]
})
export class ThreadComponent implements OnInit {
  @Input() threadData: any;
  totalMessages: number = 0;

  constructor(private customDatePipe: CustomDatePipe) {}

  ngOnInit() {
    if (this.threadData && Array.isArray(this.threadData)) {
      this.threadData.forEach((messageGroup, index) => {
        messageGroup.created_at = this.customDatePipe.transform(messageGroup.created_at);
      });
      
      this.totalMessages = this.threadData.length;
    }
  }

  trackByFn(index, item) {
    return index;
  }
}

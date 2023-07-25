import { Component, Input, OnInit } from '@angular/core';
import { CustomDatePipe } from '../../services/custom-data.pipe'
import { Thread } from '../../models/thread.model';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
  providers: [CustomDatePipe]
})
export class ThreadComponent implements OnInit {
  @Input() threadData: Thread[];
  totalMessages: number;
  isSingleThread: boolean;
  showAll: boolean = false;
  threadToShow: Thread[]; 
  showTotalMessages: boolean = true;

  constructor(private customDatePipe: CustomDatePipe) {}

  ngOnInit() {
    if (this.threadData && this.threadData.length) {
      this.totalMessages = this.threadData.length;
      this.isSingleThread = this.totalMessages === 1;
      this.threadToShow = this.threadData.map(thread => ({
        ...thread,
        created_at: this.customDatePipe.transform(thread.created_at),
        showDetails: false
      }));
  
      if (this.isSingleThread) {
        this.threadData[0].created_at = this.customDatePipe.transform(this.threadData[0].created_at);
      }
    }
  }
  

  toggleShowDetails(selectedThread: Thread) { 
    this.showTotalMessages = !this.showTotalMessages;
    this.threadToShow = this.threadToShow.map(thread => ({
      ...thread,
      showDetails: this.showTotalMessages && thread === selectedThread
    }));
  }

  getTransformStyle(index: number): string {
    if (index > 0 && this.showTotalMessages) {
      const yOffset = 190 * index;
      const translateX = index <= 1 ? 10 : 10 + (index * 5);
      const translateY = index <= 1 ? yOffset : yOffset - 200;
      return `translate3d(${translateX}px, -${translateY}px, -${100 * index}px)`;
    } else {
      return 'none';
    }
  }

  getZIndex(index: number): number {
    if (index > 0 && this.showTotalMessages) {
      return 2 - index;
    } else {
      return 2 + index;
    }
  }

  getCardClass(index: number): boolean {
    return index > 0 && this.showTotalMessages;
  }
}

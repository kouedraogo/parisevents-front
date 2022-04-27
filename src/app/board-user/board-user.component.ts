import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  events?: Event[];
  currentEvent: Event = {};
  currentIndex = -1;
  title = '';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }

  retrieveEvents(): void {
    this.eventService.getAll()
    .subscribe({
      next: (data) => {
        this.events = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveEvents();
    this.currentEvent = {};
    this.currentIndex = -1;
  }

  setActiveEvent(event: Event, index: number): void {
    this.currentEvent = event;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentEvent = {};
    this.currentIndex = -1;
    this.eventService.findByTitle(this.title)
    .subscribe({
      next: (data) => {
        this.events = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}

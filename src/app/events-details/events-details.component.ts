import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../_services/event.service';
import { Event } from '../models/event.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})

export class EventsDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentEvent: Event = {
    access_link? : '',
	  access_link_text? : '',
	  access_type? : '',
	  address_city? : '',
	  address_name? : '',
	  address_street? : '',
	  address_text? : '',
	  address_url? : '',
	  address_url_text? : '',
	  address_zipcode? : '',
	  blind? : 0,
	  contact_facebook? : '',
	  contact_mail? : '',
	  contact_phone? : '',
	  contact_twitter? : '',
	  contact_url? : '',
	  cover_alt? : '',
	  cover_credit? : '',
	  cover_url? : '',
	  date_description? : '',
	  date_end? : undefined,
	  date_start? : undefined,
	  deaf? : 0,
	  description? : '',
	  lat_lon? : [],
	  lead_text? : '',
	  occurrences? : '',
	  pmr? : 0,
	  price_detail? : '',
	  price_type? : '',
	  programs? : '',
	  tags? : '',
	  title? : '',
	  title_event? : '',
	  transport? : '',
	  updated_at? : undefined,
	  url? : '',
	  record_timestamp? : '',
  };
  
  message = '';
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEvent(this.route.snapshot.params["id"]);
    }
  }
  getEvent(id: string): void {
    this.eventService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEvent = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

/*export class EventsDetailsComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

}*/

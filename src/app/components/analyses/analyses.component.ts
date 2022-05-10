import { Component, OnInit } from '@angular/core';
import { Scrapping } from 'src/app/models/scrapping.model';
import { ScrappingService } from 'src/app/_services/scrapping.service';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {
  scrappings?: Scrapping[];
  currentScrapping: Scrapping = {};
  currentIndex = -1;

  constructor(private scrappingService: ScrappingService) { }

  ngOnInit(): void {
    this.retrieveScrappings();
  }

  retrieveScrappings(): void {
    this.scrappingService.getAll()
    .subscribe({
      next: (data) => {
        this.scrappings = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  setActiveScrapping(scrapping: Scrapping, index: number): void {
    this.currentScrapping = scrapping;
    this.currentIndex = index;
  }

}

import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { ContentModel } from './content.model';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public urubiciContentData;
  public urubiciTemperature: number = 0;
  public urubiciHumidity: number = 0;
  public urubiciPressure: number = 0;
  public urubiciCityId = '3445709'

  public nuukContentData;
  public nuukTemperature: number = 0;
  public nuukId = '3421319'

  public nairobiContentData;
  public nairobiTemperature: number = 0;
  public nairobiId = '184745'

  constructor(private contentService: ContentService) { }

  ngOnInit() {

    interval(100000)
      .pipe(
        startWith(0),
        switchMap(() => this.contentService.getCityClimate(this.urubiciCityId))
        )
        .subscribe((data: ContentModel[] ) => {
          this.urubiciContentData = data;
          this.urubiciTemperature = this.urubiciContentData.list[0].temp.day.toFixed(0);
          this.urubiciHumidity = this.urubiciContentData.list[0].humidity;
          this.urubiciPressure = this.urubiciContentData.list[0].pressure.toFixed(0);
          })

    interval(100000)
      .pipe(
        startWith(10),
        switchMap(() => this.contentService.getCityClimate(this.nuukId))
        )
        .subscribe((data: ContentModel[] ) => {
          this.nuukContentData = data;
          this.nuukTemperature = this.nuukContentData.list[0].temp.day.toFixed(0);
        })

    interval(100000)
      .pipe(
        startWith(10),
        switchMap(() => this.contentService.getCityClimate(this.nairobiId))
        )
        .subscribe((data: ContentModel[] ) => {
            this.nairobiContentData = data;
            this.nairobiTemperature = this.nairobiContentData.list[0].temp.day.toFixed(0);
          })





  }

}

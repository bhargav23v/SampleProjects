import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { YoutubeService } from '../common/youtube.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, switchMap } from 'rxjs/operators';
import { VideoModel } from '../video/video.model';


@Component({
  selector: 'youtube-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {
  videos: Array<any>;

  @ViewChild('searchInput') searchInputEl: ElementRef;

  constructor(private service: YoutubeService) {

  }

  ngOnInit() {
    const source = fromEvent(this.searchInputEl.nativeElement, 'keyup');

   const resultObservable = source.pipe(
      map ((e: any) => e.target.value), // getting value typed from the event
      filter((text: string) => text.length > 1), // filter out if any empty text
      debounceTime(250), // only call once every 250 ms (limit number of calls going to server )
      // throttle vs debounce
      map((value: string) => this.service.search(value)),
      switchMap((results) => results) // reject if call is pending
    );

    resultObservable.subscribe( (videoModels: VideoModel[]) => {
       this.videos = videoModels;

    });

  }
}
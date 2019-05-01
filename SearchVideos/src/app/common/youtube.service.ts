import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoModel } from '../video/video.model';
import * as _ from 'lodash';

@Injectable()
export class YoutubeService {
  baseUrl = 'https://www.googleapis.com/youtube/v3/search';
  key = 'AIzaSyBazul_vk-tg-akYPPomWWgBzohJ_lG--I';
  constructor(private http: HttpClient) {

  }

  search(query: string): Observable<VideoModel[]> {
       const url = `${this.baseUrl}?q=${query}&key=${this.key}&part=snippet&type=video&maxResults=20`;

       return this.http.get(url)
              .pipe(map(this.transformFunction));

  }

  transformFunction(response: any): VideoModel[] {
      const items = response.items;

      return items.map(item => {
        const id = _.get(item, 'id.videoId');
        const snippet = _.get(item, 'snippet');
        const thumbnailurl = _.get(snippet, 'thumbnails.high.url');
        const title = _.get(snippet, 'title');
        const description = _.get(snippet, 'description');

        const obj = {
           id,
           snippet,
           thumbnailurl,
           title,
           description
        };

        const videoModel = new VideoModel(obj);
        return videoModel;

      });
   }

}
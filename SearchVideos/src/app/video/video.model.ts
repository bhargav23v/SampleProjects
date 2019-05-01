import * as _ from 'lodash';

export class VideoModel {
  id: string;
  thumbnailurl: string;
  title: string;
  description: string;
  videoUrl: string;

  constructor (obj?: any) {
    this.id = _.get(obj, 'id');
    this.thumbnailurl = _.get(obj, 'thumbnailurl');
    this.title = _.get(obj , 'title');
    this.description = _.get(obj, 'description', ' Unknown Description');
    this.videoUrl = _.get(obj, 'videoUrl' , `https://www.youtube.com/watch?v=${this.id}`);
  }

}


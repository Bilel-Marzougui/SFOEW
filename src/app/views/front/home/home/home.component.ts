import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import{VideoService} from '../../../services/video/video.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  urlVideo:any
  dataUrlD:any
  dataUrlP:any
  constructor( private videoService:VideoService) { }

  ngOnInit(): void {
  this.videoService.getVideo().subscribe(url=>{
    this.urlVideo=url
    this.dataUrlD=this.urlVideo.dataUrlD
    this.dataUrlP=this.urlVideo.dataUrlP
    console.log(this.urlVideo)
  })
  }


}

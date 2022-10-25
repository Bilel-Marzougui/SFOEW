import { Component, OnInit ,ElementRef} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import{VideoService} from '../../../services/video/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  urlVideo:any
  dataUrlD:any
  dataUrlP:any
  dataUrlD2:any
  dataUrlP2:any
  vidoView=false
  testVd:any;
  urlSafe: SafeResourceUrl;
  urlSafeP: SafeResourceUrl;
  constructor( private videoService:VideoService,private hostElement: ElementRef,public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  this.videoService.getVideo().subscribe(url=>{
    if(url){
      this.urlVideo=url
      this.dataUrlD=this.urlVideo.dataUrlD
      this.dataUrlP=this.urlVideo.dataUrlP
      this.dataUrlD2='https://www.youtube.com/embed/'.concat(this.urlVideo.dataUrlD[0].url)
      this.dataUrlP2='https://www.youtube.com/embed/'.concat(this.urlVideo.dataUrlP[0].url)
      this.vidoView=true
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.dataUrlD2);
      this.urlSafeP= this.sanitizer.bypassSecurityTrustResourceUrl(this.dataUrlP2);
   
    }
 
       
  })
  }
  points = [];
  signatureImage;
  image=""
  showImage(data) {
    this.image=data
    this.signatureImage = data;
  }

}

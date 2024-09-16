import { Component,Inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { locale as englishLang } from '../assets/i18n/en';
import { locale as frlaLang } from '../assets/i18n/fr';
import { locale as arlaLang } from '../assets/i18n/ar';
import {TranslationService} from './translation.service';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem = 'Television';
  title = 'sfoew';
  currentLang = 'fr';
  lang;
  constructor(private translationService: TranslationService,@Inject(DOCUMENT) private document: Document,) {
    // this language will be used as a fallback when a translation isn't found in the current language
    /*  */
    if(localStorage.getItem('langauage')==null){
      localStorage.setItem('langauage',this.currentLang)
    }
    this.translationService.addTranslation(englishLang, frlaLang,arlaLang);
    this.lang =  localStorage.getItem('langauage')
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = this.lang === 'ar' ? 'rtl' : 'ltr';


  }
  ngOnInit() {
    this.currentLang = this.translationService.getCurrentLang();
  }
  onLangChange(currentLang: string) {
    this.translationService.useLang(currentLang);
  }
}

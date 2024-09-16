import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  langauge:any
  constructor(public translate: TranslateService) {

    translate.addLangs(['en','fr'])
    translate.setDefaultLang('fr');
     // the lang to use, if the lang isn't available, it will use the current loader to get them

    translate.use(this.getCurrentLang());
   }

   addTranslation(...args: Locale[]){
 /*    console.log(args) */
    const locales = [...args];

    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
    }
    )
  }

   getCurrentLang(){
  this.langauge=  localStorage.getItem('langauage');
  if(this.langauge){
    const browserLang=this.translate.getBrowserLang();
/*     console.log(browserLang,"kkkk",this.langauge) */
    return browserLang.match(/en|ar|fr/)?  this.langauge:  this.langauge;
  }else{
    const browserLang=this.translate.getBrowserLang();
  /*   console.log(browserLang,"kkkk",this.langauge) */
    return browserLang.match(/en|ar|fr/)?browserLang:'fr';}
   }
   useLang(languageCode:string){
    this.translate.use(languageCode);
   }
}
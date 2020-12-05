import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  lang: any;

  constructor (
    private router: Router,
    private storageService: StorageService,
    public translateService: TranslateService,
  ) {}

  ngOnInit() {
    this.lang = this.storageService.read('language');
    !this.lang ? this.storageService.save('language', 'en-US') : this.lang = this.lang;
    this.translateService.use(this.lang);
  }
  ngOnDestroy() {

  }

}

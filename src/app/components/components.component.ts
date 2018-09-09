import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
    LinkedinLoginProvider,
    VkontakteLoginProvider
} from 'angular-6-social-login-v2';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data : Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor( private renderer : Renderer, config: NgbAccordionConfig, private socialAuthService: AuthService) {
        config.closeOthers = true;
        config.type = 'info';
    }
	
	socialSignIn(socialPlatform : string) {
		let socialPlatformProvider;
		/*if(socialPlatform == "facebook"){
		  socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
		}else if(socialPlatform == "google"){
		  socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		} else if (socialPlatform == "linkedin") {
		  socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
		} else if (socialPlatform == "vkontakte") {
		  socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
		}*/
		
		if(socialPlatform == "google"){
		  socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		} 
		
		
		this.socialAuthService.signIn(socialPlatformProvider).then(
		  (userData) => {
			console.log(socialPlatform+" sign in data : " , userData);
			// Now sign-in with userData
			// ...
				
		  }
		);
	}
    
	isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  //FacebookLoginProvider,
  //LinkedinLoginProvider,
  //VkontakteLoginProvider,
} from "angular-6-social-login-v2";
import { BlockchainComponent } from './blockchain/blockchain.component';
import { OurstrengthComponent } from './ourstrength/ourstrength.component';
import { FrontenddevelopmentComponent } from './frontenddevelopment/frontenddevelopment.component';
import { BackenddevelopmentComponent } from './backenddevelopment/backenddevelopment.component';
import { OpensourcedevelopmentComponent } from './opensourcedevelopment/opensourcedevelopment.component';
import { MobileapplicationdevelopmentComponent } from './mobileapplicationdevelopment/mobileapplicationdevelopment.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      /*{
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("628941744165629")
      },*/
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("643893151630-hca0amss9930o2dql16pb3ai54e4ve8e.apps.googleusercontent.com")
      }/*,
      {
        id: VkontakteLoginProvider.PROVIDER_ID,
        provider: new VkontakteLoginProvider("Your-VK-Client-Id")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
      }*/
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlockchainComponent,
    OurstrengthComponent,
    FrontenddevelopmentComponent,
    BackenddevelopmentComponent,
    OpensourcedevelopmentComponent,
    MobileapplicationdevelopmentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
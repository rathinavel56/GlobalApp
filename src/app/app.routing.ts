import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { OurstrengthComponent } from './ourstrength/ourstrength.component';
import { FrontenddevelopmentComponent } from './frontenddevelopment/frontenddevelopment.component';
import { BackenddevelopmentComponent } from './backenddevelopment/backenddevelopment.component';
import { OpensourcedevelopmentComponent } from './opensourcedevelopment/opensourcedevelopment.component';
import { MobileapplicationdevelopmentComponent } from './mobileapplicationdevelopment/mobileapplicationdevelopment.component'
const routes: Routes =[
    { path: '',                component: ComponentsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
	{ path: 'blockchain',     component: BlockchainComponent },
	{ path: 'ourstrength',     component: OurstrengthComponent },
	{ path: 'frontenddevelopment',     component: FrontenddevelopmentComponent },
	{ path: 'backenddevelopment',     component: BackenddevelopmentComponent },
	{ path: 'opensourcedevelopment',     component: OpensourcedevelopmentComponent },
	{ path: 'mobileapplicationdevelopment',     component: MobileapplicationdevelopmentComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }

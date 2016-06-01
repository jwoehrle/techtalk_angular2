import { Component } from '@angular/core';
// Anm.: Zu @angular/router aus dem RC1 gibt es derzeit keine Doku.
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {UserService} from "./user.service";
import {UserListComponent} from "./user-list.component";
import {UserDetailComponent} from "./user-detail.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
	directives: [ROUTER_DIRECTIVES],
    providers: [UserService, ROUTER_PROVIDERS],
})
@RouteConfig([
    { path: '/users',      name: 'UserList',    component: UserListComponent,  useAsDefault: true },
	{ path: '/users/:id',  name: 'UserDetail', component: UserDetailComponent }
])
export class AppComponent {
}

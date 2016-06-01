import { Component, OnInit } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-detail',
  templateUrl: 'app/user-detail.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class UserDetailComponent implements OnInit {
    id: Number;
	user: User;

	constructor(
        private userService: UserService,
		private routeParams: RouteParams) {
	    this.id = +this.routeParams.get('id');
	}

	ngOnInit() {
		this.userService.getUser(this.id).subscribe(user => { 
		    this.user = user; 
	    });
	}
}
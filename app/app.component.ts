import {Component} from '@angular/core';
import {UserService} from "./user.service";
import { OnInit } from '@angular/core';
import {User} from "./User";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit{

    users: Array<User>;
    allUsers: Array<User>;


    filterString: string;

    constructor(private userService: UserService) {
        this.users = [];
    }


    ngOnInit() {
        this.userService.getUsers().subscribe(
            users => this.users = this.allUsers = users        
        );
    }
    
    updateFilter(event: Event) {        
        console.log("Key pressed " + event.target.valueOf());
    }
    
    filter() {
        if ( this.filterString && this.filterString.length > 0 ) {
            this.users = this.users.filter( entry => entry.name.startsWith(this.filterString));
        } else {
            this.users = this.allUsers;
        }
    }

}

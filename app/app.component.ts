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
    
    filter(value: string) {        
        if ( value && value.length > 0 ) {
            this.users = this.allUsers.filter( entry => entry.name.toUpperCase().startsWith(value.toUpperCase()));
        } else {
            this.users = this.allUsers;
        }
    }

}

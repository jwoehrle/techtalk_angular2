import {Component} from '@angular/core';
import {UserService} from "./UserService";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [UserService]
})
export class AppComponent {


    constructor(private userService: UserService) {
    }
    
    
    public users(): Array<any> {
        return this.userService.getUsers();
    }
}

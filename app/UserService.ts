import {Injectable} from '@angular/core'

@Injectable()
export class UserService {

    getUsers(): Array<any> {
        return [{name : 'Fritz'}];
    }
}

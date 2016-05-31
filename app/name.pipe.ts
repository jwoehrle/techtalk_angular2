import {Pipe, PipeTransform} from '@angular/core'
import {User} from "./user";


@Pipe({
    name : 'namePipe',
    pure: false
})
export class NamePipe implements PipeTransform {

    transform(allUsers: Array<User>, filterString: string):any {
        if ( filterString && filterString.length > 0 ) {
            return allUsers.filter( entry => entry.name.toUpperCase().startsWith(filterString.toUpperCase()));
        } else {
            return allUsers;
        }
    }

}

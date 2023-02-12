import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'departmentpipe'
})
export class DepartmentNamePipe implements PipeTransform{
    transform(value: any) {
        if(value == 'ct') {
            return 'Comput.Engg'
        } 
        else {
            return 'Electr.Engg'
        }
    }

}
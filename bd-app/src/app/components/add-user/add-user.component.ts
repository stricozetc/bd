import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  public user = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    progress: new FormControl(''),
  });
  constructor() { }

  public addUser(): void {
    const users = Array.from(JSON.parse(localStorage.getItem('users')));
    users.push(this.user.value);
    localStorage.setItem('users', JSON.stringify(users));
  }
}

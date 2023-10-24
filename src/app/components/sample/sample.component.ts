import { Component } from '@angular/core';
import { Sample } from 'src/app/models/sample';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  name: string = '';
  phone: string = '';
  email: string = '';

  users: Sample[] = [];

  editId = 0;
  btnText = 'Add';

  add(): void {
    if (this.editId === 0) {
      let user: Sample = {
        id: this.users.length + 1,
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      this.users.push(user);
      this.name = '';
      this.phone = '';
      this.email = '';
    } else {
      const editedUserIndex = this.users.findIndex(
        (user) => user.id === this.editId
      );
      if (editedUserIndex !== -1) {
        this.users[editedUserIndex] = {
          id: this.editId,
          name: this.name,
          phone: this.phone,
          email: this.email,
        };
        this.editId = 0;
      }
    }
    // console.log('this.editId');
  }
  delete(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  edit(id: number): void {
    this.editId = id;
    this.btnText = 'Edit';
    const userToEdit = this.users.find((user) => user.id === id);
    if (userToEdit) {
      this.name = userToEdit.name;
      this.phone = userToEdit.phone;
      this.email = userToEdit.email;
    }
  }
}

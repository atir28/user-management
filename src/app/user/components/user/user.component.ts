import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interface/User';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../store/user.selectors';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import * as UserActions from '../../store/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild('updateModal') updateModal!: ElementRef<any>;
  @ViewChild('createModal') createModal!: ElementRef<any>;
  users$!: Observable<User[]>;
  filteredUsers$!: Observable<User[]>;
  searchUser: string = '';
  departments: string[] = ['Marketing', 'Management', 'Maintenance'];
  selectedDepartment: any = this.departments[0];
  userToRemove!: User;
  userForm!: FormGroup;
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.userFormController();
    this.users$ = this.store.select(selectAllUsers);

    this.filteredUsers$ = this.searchTermSubject.pipe(
      map(term => term.toLowerCase()),
      switchMap(term =>
        this.users$.pipe(
          map((users) => users.filter(user =>
            (user.first_name?.toLowerCase() ?? '').includes(term) ||
            (user.last_name?.toLowerCase() ?? '').includes(term) ||
            (user.username?.toLowerCase() ?? '').includes(term) ||
            (user.department?.toLowerCase() ?? '').includes(term)
          ))
        )
      )
    );

    this.searchTermSubject.next(this.searchUser);
  }
  onSearchChange(searchUser: string): void {
    this.searchTermSubject.next(searchUser);
  }

  userFormController(userData: User = {}) {
    this.userForm = this.formBuilder.group({
      id: [userData.id ? userData.id : null],
      first_name: [userData.first_name ? userData.first_name : '', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      last_name: [userData.last_name ? userData.last_name : '', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      username: [userData.username ? userData.username : '', [Validators.required]],
      isAdmin: [userData.isAdmin ? userData.isAdmin : false],
      department: [userData.department ? userData.department : this.selectedDepartment, [Validators.required]]
    });
  }

  openUpdateUserModal(user: User) {
    this.selectedDepartment = user.department
    this.userForm.patchValue(user);
    console.log(this.selectedDepartment)
    this.updateModal.nativeElement.showModal()
  }
  openConfirmDialogModal(user: User) {
    this.userToRemove = user;
  }

  generateRandomId(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }
  saveUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();

    } else {
      const user = this.userForm.getRawValue();
      const newId = this.generateRandomId();
      const updatedUser = {
        ...user,
        id: newId
      };

      this.store.dispatch(UserActions.addUser({ user: updatedUser }));
      this.userForm.reset();
      this.createModal.nativeElement.close();
    }
  }

  updateUser() {
    this.store.dispatch(UserActions.updateUser({ user: this.userForm.getRawValue() }));
    this.userForm.reset();
    this.updateModal.nativeElement.close();
  }

  removeUser() {
    this.store.dispatch(UserActions.deleteUser({ id: this.userToRemove.id as number }));
    this.userToRemove = {};

  }

  cancelForm(modal: any) {
    this.userForm.reset();
    modal.close();
  }

}

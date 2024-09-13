import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interface/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users = [{ "id": 1, "first_name": "Lennard", "last_name": "Decaze", "username": "Jamie", "isAdmin": true, "department": "Sheilakathryn" },
  { "id": 2, "first_name": "Trev", "last_name": "Parysiak", "username": "Lionello", "isAdmin": false, "department": "Rosalyn" },
  { "id": 3, "first_name": "Karel", "last_name": "Lydden", "username": "Sam", "isAdmin": false, "department": "Ellie" },
  { "id": 4, "first_name": "Skip", "last_name": "Lee", "username": "Hailey", "isAdmin": true, "department": "Tremain" },
  { "id": 5, "first_name": "Batholomew", "last_name": "Perulli", "username": "Simonne", "isAdmin": true, "department": "Arabela" }]

  departments = [
    { id: 0, name: 'Marketing' },
    { id: 1, name: 'Management' },
    { id: 2, name: 'Maintenance' },
  ]

  selectedDepartment = this.departments[0]
  userForm!: FormGroup;
  dialogTitile: string = 'Create'

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.userFormController();
  }

  userFormController(userData: User = {}) {
    this.userForm = this.fb.group({
      id: [this.generateRandomId(), Validators.required],
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      username: ['', [Validators.required]],
      isAdmin: [false],
      department: [Validators.required]
    });

  }

  generateRandomId(): number {
    return Math.floor(1000 + Math.random() * 9000);  // Generates a number between 1000 and 9999
  }
  isAdminToText(isAdmin: boolean): string {
    return isAdmin ? 'yes' : 'no';
  }

  saveUser() {
    this.userForm.reset();
  }
  @ViewChild('updateModal') updateModal!: ElementRef<any>;

  updateUser() {
    this.updateModal.nativeElement.showModal()
  }

  removeUser(id: number) { }

}

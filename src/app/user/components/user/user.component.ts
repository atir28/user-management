import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users = [{ "id": 1, "first_name": "Lennard", "last_name": "Decaze", "username": "Jamie", "isAdmin": true, "department": "Sheilakathryn" },
    { "id": 2, "first_name": "Trev", "last_name": "Parysiak", "username": "Lionello", "isAdmin": false, "department": "Rosalyn" },
    { "id": 3, "first_name": "Karel", "last_name": "Lydden", "username": "Sam", "isAdmin": false, "department": "Ellie" },
    { "id": 4, "first_name": "Skip", "last_name": "Lee", "username": "Hailey", "isAdmin": true, "department": "Tremain" },
    { "id": 5, "first_name": "Batholomew", "last_name": "Perulli", "username": "Simonne", "isAdmin": true, "department": "Arabela" }]
  
  
    isAdminToText(isAdmin: boolean): string {
      return isAdmin ? 'yes' : 'no';
    }
  
    departments = [
      { id: 1, name: 'Marketing' },
      { id: 2, name: 'Management' },
      { id: 3, name: 'Maintenance' },
    ]
  
    selectedDepartmentId:any
  
    isDropdownOpen = false;
  
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  
    closeDropdown() {
      this.isDropdownOpen = false;
    }
  
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interface/User';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserById } from '../../store/user.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User | undefined>;
  constructor(private location: Location, private route: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.user$ = this.store.select(selectUserById(parseInt(this.route.snapshot.paramMap.get('id') || '0')));
  }
  goBack(): void {
    this.location.back();
  }

}

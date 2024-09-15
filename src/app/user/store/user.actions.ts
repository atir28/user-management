import { createAction, props } from "@ngrx/store";
import { User } from "../interface/User";

// Action for user loading
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());

// Action for adding users
export const addUser = createAction('[User] Add User', props<{ user: User }>());

// Action for updating user
export const updateUser = createAction('[User] Update User', props<{ user: User }>());

// Action for deleting user
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
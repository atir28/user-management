import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../interface/User';

export interface UserState {
    users: User[]
}

// initiali state with dummy user
const initialState: UserState = {
    users: [
        { id: 0, first_name: "Abhishek", last_name: "Giri", username: "agiri", isAdmin: true, department: 'Management' },
        { id: 2, first_name: "Tai", last_name: "San", username: "santai", isAdmin: false, department: 'Marketing' },
        { id: 72, first_name: "Roger", last_name: "Melet", username: "melroger", isAdmin: true, department: 'Maintenance' },
       
    ],
};

export const userReducer = createReducer(
    initialState,

    // On user loading
    on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),

    // On adding user
    on(UserActions.addUser, (state, { user }) => ({
        ...state,
        users: [...state.users, { ...user }]
    })),

    // On updating user
    on(UserActions.updateUser, (state, { user }) => ({
        ...state,
        users: state.users.map((u) => (u.id === user.id ? user : u))
    })),

    // On removing user
    on(UserActions.deleteUser, (state, { id }) => ({
        ...state,
        users: state.users.filter((u) => u.id !== id)
    }))
);

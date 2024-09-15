import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

// Selector to get all users from store
export const selectAllUsers = createSelector(
    selectUserState,
    (state: UserState) => state.users
);

// Selector to get user by id from store
export const selectUserById = (id: number) => createSelector(
    selectUserState,
    (state: UserState) => state.users.find(user => user.id === id)
);

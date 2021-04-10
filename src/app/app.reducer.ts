
import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './core/reducers/user.reducer.js';

export interface AppState {
  user: fromUser.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: fromUser.userReducer
};

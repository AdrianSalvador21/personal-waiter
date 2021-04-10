import * as fromUsers from '../actions/user.action.js';

export interface UserState {
  formattedAddress: string;
}

const initialStatus: UserState = {
  formattedAddress: ''
};

export function userReducer( state = initialStatus, action: fromUsers.actions ): any {

  switch ( action.type ) {
    case fromUsers.SET_FORMATTED_ADDRESS:
      return {
        ...state,
        formattedAddress: action.formattedAddressData.formattedAddress
      };

    default:
      return state;
  }
}

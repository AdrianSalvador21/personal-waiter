import { Action } from '@ngrx/store';

export const SET_FORMATTED_ADDRESS = '[User] Set formatted address';

export class SetFormattedAddressAction implements Action {
  readonly type = SET_FORMATTED_ADDRESS;
  constructor( public formattedAddressData: any ) {}
}

export type actions = SetFormattedAddressAction;

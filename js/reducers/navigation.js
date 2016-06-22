/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

export type Tab =
    'post'
  | 'info'
  | 'setting'

type State = {
  tab: Tab
}

const initialState: State = {
  tab: 'post'
}

export default function navigation(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'SWITCH_TAB':
      return {
        ...state,
        tab: action.tab
      }
    default:
      return state
  }
}

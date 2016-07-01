/**
 * @flow
 */
'use strict';

import type {Action} from './types';

type Tab = 'post' | 'info' | 'map' | 'setting';

// Navigation action creators
export function switchTab(tab: Tab): Action {
  return {
    type: 'SWITCH_TAB',
    tab: tab
  }
}

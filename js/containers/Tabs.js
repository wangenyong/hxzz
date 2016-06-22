/**
 *
 */

'use strict'

import { connect } from 'react-redux';
import TabsView from '../components/TabsView';
import { switchTab } from '../actions';

const mapStateToProps = (state) => {
  return {
    tab: state.navigation.tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTabSelect: (tab) => {
      dispatch(switchTab(tab));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsView)

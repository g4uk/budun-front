import React, {Component} from 'react';
import { connect } from 'react-redux';

import AccountLayout from '../layouts/Account';

import './account.less'

class Account extends Component {
    render() {
        return (
            <AccountLayout app={this.props.app}>
                account
            </AccountLayout>
        )
    }
}

function mapStateToProps (state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(Account);
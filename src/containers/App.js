import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';

class App extends Component {
    render() {
        const {user, page} = this.props;
        const {getPhotos} = this.props.pageActions;

        return <div>
            <User name={user.name}/>
            <Page year={page.year} photos={page.photos} fetching={page.fetching} getPhotos={getPhotos}/>
        </div>
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
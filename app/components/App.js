import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Layout, Menu, Icon, Badge } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Routes from '../routes';

import './app.less'
import Logo from './assets/logo.svg';

const { Header, Footer } = Layout;

class App extends Component {

    render() {
        return (
            <Layout>
                <Router>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Link to="/"><Logo width={100} className="logo" /></Link>

                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={[this.props.app.default_page]}
                            >
                                <Menu.Item key="home">
                                    <Link to="/"><Icon type="home" />Home</Link>
                                </Menu.Item>
                                <Menu.Item key="tasks">
                                    <Link to="/tasks"><Icon type="schedule" />Tasks</Link>
                                </Menu.Item>
                                <Menu.Item key="vendors">
                                    <Link to="/vendors"><Icon type="book" />Vendors</Link>
                                </Menu.Item>
                                <Menu.Item key="features">
                                    <Link to="/features"><Icon type="tag-o" />Features</Link>
                                </Menu.Item>
                                <Menu.Item key="terms_conditions">
                                    <Link to="/terms-and-conditions"><Icon type="profile" />Terms & Conditions</Link>
                                </Menu.Item>
                                <Menu.Item key="account">
                                    <Link to="/account">
                                        <span style={{ marginRight: 24 }}>
                                            <Badge count={this.props.app.user_notification}>
                                                <Icon type="user" />Account
                                            </Badge>
                                        </span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Header>

                        <Switch>
                        {Routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.page}
                            />
                        ))}
                        </Switch>

                    </Layout>
                </Router>

                <Footer style={{ textAlign: 'center' }}>
                    Budun ©2018 Created by Budun.inc
                </Footer>
            </Layout>
        );
    }
};

function mapStateToProps (state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(App);
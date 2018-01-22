import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Layout, Menu, Icon, Button } from 'antd';
const { Content, Sider } = Layout;

import './accountLayout.less'

class AccountLayout extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    style={{ background: '#fff' }}
                    breakpoint="lg"
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    trigger={null}
                >
                    <Menu defaultSelectedKeys={[this.props.app.my_current]} mode="inline">
                        <Menu.Item key="my_tasks">
                            <Icon type="user" />
                            <span className="nav-text">Tasks</span>
                        </Menu.Item>
                        <Menu.Item key="my_abilities">
                            <Icon type="video-camera" />
                            <span className="nav-text">Abilities</span>
                        </Menu.Item>
                        <Menu.Item key="my_balance">
                            <Icon type="upload" />
                            <span className="nav-text">Balance</span>
                        </Menu.Item>
                        <Menu.Item key="my_transactions">
                            <Icon type="upload" />
                            <span className="nav-text">Transactions</span>
                        </Menu.Item>
                        <Menu.Item key="my_settings">
                            <Icon type="user" />
                            <span className="nav-text">Settings</span>
                        </Menu.Item>
                    </Menu>

                </Sider>
                <Content>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                    </div>
                </Content>
            </Layout>
        )
    }
}

function mapStateToProps (state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(AccountLayout);
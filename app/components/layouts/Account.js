import React, {Component} from "react";
import { Layout, Menu, Icon } from 'antd';

const { Content, Sider } = Layout;

class AccountLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout>
                <Content>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.props.children}
                    </div>
                </Content>
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

            </Layout>
        )
    }
};

export default AccountLayout;
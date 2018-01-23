import React, {Component} from "react";
import { Layout } from 'antd';

const { Content } = Layout;

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.props.children}
                    </div>
                </Content>
            </Layout>
        )
    }
};

export default DefaultLayout;
import React, {Component} from 'react';
import { Layout, Row, Col } from 'antd';

import TaskListHome from '../task/Home/List';
import VendorListHome from '../vendor/Home/List';

const { Content } = Layout;

import './homeLayout.less'

class HomeLayout extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Row gutter={64}>
                            <Col span={12} style={{ textAlign: 'center' }}>
                                <TaskListHome />
                            </Col>
                            <Col span={12} style={{ textAlign: 'center' }}>
                                <VendorListHome />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default HomeLayout;
import React, {Component} from "react";
import { Row, Col } from 'antd';

import TaskListHome from '../task/Home/List';
import VendorListHome from '../vendor/Home/List';

import DefaultLayout from '../layouts/Default';

import './home.less'

class Home extends Component {
    render() {
        return (
            <DefaultLayout>
                <Row gutter={64}>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        <TaskListHome />
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        <VendorListHome />
                    </Col>
                </Row>
            </DefaultLayout>

        )
    }
};

export default Home;
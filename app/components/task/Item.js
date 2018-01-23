import React, {Component} from "react";
import { Icon, List as AList } from 'antd';

class Item extends Component {
    render() {
        return (
            <AList.Item actions={[<Icon type="phone" />, <Icon type="mail" />]}>
                <AList.Item.Meta
                    title={<a href="https://ant.design">{this.props.item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            </AList.Item>

        )
    }
}

export default Item;
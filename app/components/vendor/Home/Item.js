import React, {Component} from "react";
import { Icon, Card, Avatar } from 'antd';

const { Meta } = Card;

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

class Item extends Component {
    render() {
        return (
            <Card
                style={{ marginTop: "15px" }}
                //cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <Icon type="ellipsis" />]}
                hoverable
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={this.props.item.title}
                    description="This is the description"
                />
            </Card>
        )
    }
}

export default Item;
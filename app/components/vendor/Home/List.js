import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Input, Row, List as AList } from 'antd';
import Item from './Item';

const Search = Input.Search;

class List extends Component {
    onSearch = (value) => {
        console.log(value);
    };

    render() {
        return (
            <div>
                <h2>Vendors</h2>
                <Row>
                    <Search placeholder="input search text"
                            onSearch={value => this.onSearch(value)}
                    />
                </Row>
                <Row>
                    <AList
                        itemLayout="horizontal"
                        dataSource={this.props.vendors}
                        renderItem={item => (
                            <Item item={item} />
                        )}
                    />
                </Row>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        vendors: state.vendors
    }
}

export default connect(mapStateToProps)(List);
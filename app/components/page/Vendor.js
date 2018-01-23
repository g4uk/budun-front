import React, {Component} from "react";

import DefaultLayout from '../layouts/Default';
import VendorList from '../vendor/List';

class Vendor extends Component {
    render() {
        return (
            <DefaultLayout>
                <VendorList/>
            </DefaultLayout>
        )
    }
};

export default Vendor;
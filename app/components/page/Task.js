import React, {Component} from "react";

import DefaultLayout from '../layouts/Default';
import TaskList from '../task/List';

class Task extends Component {
    render() {
        return (
            <DefaultLayout>
                <TaskList/>
            </DefaultLayout>
        )
    }
};

export default Task;
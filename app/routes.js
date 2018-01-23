import Home from './components/page/Home';
import Task from './components/page/Task';
import Vendor from './components/page/Vendor';
import Feature from './components/page/Feature';
import Term from './components/page/Term';
import Account from './components/page/Account';

const Routes = [
    {
        path: '/',
        exact: true,
        page: Home
    }, {
        path: '/tasks',
        page: Task,
        exact: false
    }, {
        path: '/vendors',
        page: Vendor,
        exact: false
    }, {
        path: '/features',
        page: Feature,
        exact: false
    }, {
        path: '/terms-and-conditions',
        page: Term,
        exact: false
    }, {
        path: '/account',
        page: Account,
        exact: false
    }
];

export default Routes;
import {
    faThLarge, faChartPie,
    faBox,
    faCalendarAlt, faUserCircle, faTasks, faWorm, faTable, faFileAlt, faCog
} from '@fortawesome/free-solid-svg-icons';

export const menuGroups = [
    {
        name: 'MENU',
        items: [
            {
                name: 'Dashboard',
                icon: faThLarge,
                path: '/dashboard',
                children: [
                    { name: 'Ecommerce', path: '/dashboard/ecommerce' },
                    { name: 'Analytics', path: '/dashboard/analytics' },
                    { name: 'Marketing', path: '/dashboard/marketing' },
                    { name: 'CRM', path: '/dashboard/crm' },
                    { name: 'Stocks', path: '/dashboard/stocks' },
                    { name: 'Saas', path: '/dashboard/saas', isNew: true },
                    { name: 'Logistics', path: '/dashboard/logistics', isNew: true },
                ]
            },
            { name: 'Calendar', icon: faCalendarAlt, path: '/dashboard/calendar' },
            { name: 'User Profile', icon: faUserCircle, path: '/dashboard/profile' },
            {
                name: 'Task',
                icon: faTasks,
                path: '#',
                children: [{ name: 'List', path: '/dashboard/task/list' }, { name: 'Kanban', path: '/dashboard/task/kanban' }]
            },
            {
                name: 'Forms',
                icon: faWorm,
                path: '#',
                children: [{ name: 'Form Elements', path: '/dashboard/forms/elements' }, { name: 'Form Layout', path: '/dashboard/forms/layout' }]
            },
            { name: 'Tables', icon: faTable, path: '/dashboard/tables' },
            { name: 'Settings', icon: faCog, path: '/dashboard/settings' },
            { name: 'Chart', icon: faChartPie, path: '/dashboard/chart' },
            { name: 'UI Elements', icon: faBox, path: '#', children: [{ name: 'Alerts', path: '#' }, { name: 'Buttons', path: '#' }] },
            { name: 'Authentication', icon: faFileAlt, path: '#', children: [{ name: 'Sign In', path: '#' }, { name: 'Sign Up', path: '#' }] },
        ]
    }
];
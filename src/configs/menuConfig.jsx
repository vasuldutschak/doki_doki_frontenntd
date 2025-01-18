import { FaUsers, FaCalendarAlt, FaTachometerAlt, FaChartBar, FaSignOutAlt, FaCog } from 'react-icons/fa';

const menuConfig = [
    {
        label: 'Users',
        icon: <FaUsers size={24}/>,
        path: '/users'
    },
    {
        label: 'Scheduled',
        icon: <FaCalendarAlt size={24}/>,
        path: '/scheduled'
    },
    {
        label: 'Dashboard',
        icon: <FaTachometerAlt size={24}/>,
        path: '/dashboard'
    },
    {
        label: 'Statistics',
        icon: <FaChartBar size={24}/>,
        path: '/statistics'
    },{
        label: 'Settings',
        icon: <FaCog size={24}/>,
        path: '/settings'
    },
    {
        label: 'Logout',
        icon: <FaSignOutAlt size={24}/>,
        path: '/logout'
    }
];

export default menuConfig;
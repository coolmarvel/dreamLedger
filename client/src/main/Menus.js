import React from 'react';




export var staticMenu = [
    {
        id:1,
        menuName: 'Block Architecture',
        menuDescription: 'Block Architecture',
        path: '/block_architecture',
        exact: true,
        icon :<i className="las la-project-diagram"></i>,
        submenu: [
        ]
    },
    {
        id:2,
        menuName: 'Dashboard',
        menuDescription: 'Dashboard',
        path: '/dashboard',
        exact: true,
        icon: <i className="las la-clipboard-list"></i>,
        submenu: [
        ]
    },
    {
        id:3,
        menuName: 'Block Manager',
        menuDescription: 'Block Manager',
        // path: '/block_manager',
        // component: StudyHistoryPage,
        mainStatus:'manageInfoStatus',
        exact: true,
        icon :<i className="las  la-tools"></i>,
        submenu: [
            {
                id:'301',
                menuName: 'Servers',
                menuDescription: 'Servers',
                path: '/block_manager_servers',
                // component: ItemChangeStatus,
                icon: '',
            },
            {
                id: 302,
                menuName: 'Org',
                menuDescription: 'Org',
                path: '/block_manager_org',
                // component: StudyHistoryPage,
                icon: ''
            },
            {
                id: 303,
                menuName: 'Ordered',
                menuDescription: 'Ordered',
                path: '/block_manager_ordered',
                // component: StudyHistoryPage,
                icon:  ''
            },
            {
                id: 304,
                menuName: 'Peer',
                menuDescription: 'Peer',
                path: '/block_manager_peer',
                // component: StudyHistoryPage,
                icon: ''
            },
            {
                id: 305,
                menuName: 'Channel',
                menuDescription: 'Channel',
                path:  '/block_manager_channel',
                // component: StudyHistoryPage,
                icon: ''
            },
            {
                id: 306,
                menuName: 'Chaincodes',
                menuDescription: 'Chaincodes',
                path:  '/block_manager_chaincodes',
                // component: StudyHistoryPage,
                icon: ''
            },
            {
                id: 307,
                menuName: 'CA servers',
                menuDescription: 'CA servers',
                path:  '/block_manager_caservers',
                // component: StudyHistoryPage,
                icon: ''
            },
            {
                id: 308,
                menuName: 'CA users',
                menuDescription: 'CA users',
                path:  '/block_manager_causers',
                // component: StudyHistoryPage,
                icon: ''
            },
        ]
    },
    {
        id:4,
        menuName: 'Block History',
        menuDescription: 'Blcok History',
        // path: '/bl',
        // component: StudyHistoryPage,
        mainStatus:'manageInfoStatus',
        exact: true,
        icon :<i className="las  la-history"></i>,
        submenu: [
            {
                id:'401',
                menuName: 'Blocks',
                menuDescription: 'Blocks',
                path: '/block_history_blocks',
                // component: ItemChangeStatus,
                icon: '',
            },
            {
                id: 402,
                menuName: 'Transactions',
                menuDescription: 'Transactions',
                path: '/block_history_transactions',
                // component: StudyHistoryPage,
                icon: ''
            },

        ]
    },
    {
        id:5,
        menuName: 'Blcok Stats',
        menuDescription: 'Blcok Stats',
        // path: '/bl',
        // component: StudyHistoryPage,
        mainStatus:'manageInfoStatus',
        exact: true,
        icon :<i className="las  la-chart-pie"></i>,
        submenu: [
            {
                id:'501',
                menuName: 'Blocks&Transatiocns',
                menuDescription: 'Blocks&Transatiocns',
                path: '/block_stats',
                // component: ItemChangeStatus,
                icon: '',
            },
        ]
    },
    {
        id:6,
        menuName: 'Resource',
        menuDescription: 'Resource',
        // path: '/bl',
        // component: StudyHistoryPage,
        mainStatus:'manageInfoStatus',
        exact: true,
        icon :<i className="las  la-chart-area"></i>,
        submenu: [
            {
                id:'601',
                menuName: 'Resource History',
                menuDescription: 'Resource History',
                path: '/resource_history',
                // component: ItemChangeStatus,
                icon: '',
            },
            {
                id: 602,
                menuName: 'Resource Stats',
                menuDescription: 'Resource Stats',
                path: '/resource_stats',
                // component: StudyHistoryPage,
                icon: ''
            },

        ]
    },
    {
        id:7,
        menuName: 'Setting',
        menuDescription: 'Setting',
        // path: '/bl',
        // component: StudyHistoryPage,
        mainStatus:'manageInfoStatus',
        exact: true,
        icon :<i className="las la-user-cog"></i>,
        submenu: [
            {
                id:'701',
                menuName: 'Administator',
                menuDescription: 'Administator',
                path: '/setting_administrator',
                // component: ItemChangeStatus,
                icon: '',
            },
            {
                id: 702,
                menuName: 'Authority',
                menuDescription: 'Authority',
                path: '/setting_authority',
                // component: StudyHistoryPage,
                icon: ''
            },

        ]
    },

];

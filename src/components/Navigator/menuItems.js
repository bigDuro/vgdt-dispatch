import React from 'react';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import BusinessIcon from '@material-ui/icons/Business';

export const navigation = [
  {
    name: 'Administrators',
    route: '/vgdt-dispatch/name',
    icon: (<SupervisedUserCircleIcon />),
    table: 'users'
  },
  {
    name: 'Load Board',
    route: '/vgdt-dispatch/name',
    icon: (<SupervisedUserCircleIcon />),
    table: ''
  },
  {
    name: 'Brokers',
    route: '/vgdt-dispatch/name',
    icon: (<BusinessIcon />),
    table: 'brokers',
    admin: true
  },
]

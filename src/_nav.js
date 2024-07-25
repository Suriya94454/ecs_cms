import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Home',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Updates',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Posts',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Media',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Pages',
    to: '/page',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Comments',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Astra',
    to: '/astra',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Appearance',
    to: '/appearance',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Plugins',
    to: '/plugins',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Tools',
    to: '/tools',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />
  },
]

export default _nav

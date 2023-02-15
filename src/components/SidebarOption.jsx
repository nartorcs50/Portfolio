import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react'

function SidebarOption({Icon}) {
  return (
    <div className="sidebarOption">
        <Icon className="sidebar__icon" />
    </div>
  )
}

export default SidebarOption;
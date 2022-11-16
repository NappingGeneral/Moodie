import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import classNames from 'classnames';

export default function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive ? "" : "";

  return (
    <Link to={props.to}>
        <div className={classNames(isActive ? 'bg-neutral-700 scale-[103%]':'', 'flex items-center p-3 rounded hover:bg-neutral-800', btnClass)}>
          <IconContext.Provider value={{size: "30px"}}>
            {props.icon}
            <p className='text-xl px-4'>{props.title}</p>
          </IconContext.Provider>
        </div>
    </Link>
  )
}

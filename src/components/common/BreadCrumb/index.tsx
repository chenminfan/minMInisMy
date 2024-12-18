import React from 'react'
import './breadCrumb.scss'

type Props = {
  children: JSX.Element | JSX.Element[],
}

export default function Breadcrumb(props: Props) {
  const { children } = props
  return (
    <nav className='detail-breadcrumb d-flex align-items-center h-100' aria-label="breadcrumb">
      <ol className="breadcrumb">
        {children}
      </ol>
    </nav>
  )
}
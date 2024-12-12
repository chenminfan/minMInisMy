import React from 'react'

type Props = {
  itemLink?: string,
  itemName?: string,
  itemIcon?: string,
  itemActive?: boolean,
}

export default function BreadcrumbItem(props: Props) {
  const { itemLink, itemName, itemIcon, itemActive = false } = props
  return (
    <li className="breadcrumb-item">
      <a className={`${itemActive ? 'text-primary' : 'text-muted'}`} href={itemLink} role="link" aria-label="breadcrumb-link">
        <span className='breadcrumb-icon me-2'>{itemIcon && itemIcon}</span>{itemName && itemName}</a>
    </li >
  )
}
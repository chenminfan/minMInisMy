import React from 'react'

type Props = {
  itemLink?: string,
  itemName?: string,
  itemIcon?: object | any,
  itemActive?: boolean,
}

export default function BreadcrumbItem(props: Props) {
  const { itemLink = '', itemName = '', itemIcon, itemActive = false } = props
  return (
    <li className="breadcrumb-item">
      <a className={`${itemActive ? 'text-primary' : 'text-muted'}`} href={itemLink} role="link" aria-label="breadcrumb-link">
        {itemIcon ? <span className="material-symbols-outlined">
          {itemIcon}
        </span> : itemName}</a>
    </li >
  )
}
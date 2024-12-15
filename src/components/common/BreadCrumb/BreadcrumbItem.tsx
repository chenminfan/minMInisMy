import React from 'react'

type Props = {
  itemLink?: string,
  itemName?: string,
  itemIcon?: object | any,
  itemActive?: boolean,
  handleClick?: (string) => void
}

export default function BreadcrumbItem(props: Props) {
  const { itemLink = '', itemName = '', itemIcon, itemActive = false, handleClick = () => { } } = props
  return (
    <li className="breadcrumb-item" onClick={handleClick}>
      {itemLink ? (<a className={`${itemActive ? 'text-primary' : 'text-muted'}`} href={itemLink} role="link" aria-label="breadcrumb-link">
        <span className='breadcrumb-icon me-2'>{itemIcon && itemIcon}</span>{itemName && itemName}</a>) : (<span className={`${itemActive ? 'text-primary' : 'text-muted'}`} role="link" aria-label="breadcrumb-link">
          <span className='breadcrumb-icon me-2'>{itemIcon && itemIcon}</span>{itemName && itemName}
        </span>
      )}
    </li >
  )
}
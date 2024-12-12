import React from 'react'

type Props = {
  children: JSX.Element | JSX.Element[],
}

export default function Breadcrumb(props: Props) {
  const { children } = props
  return (
    <nav aria-label="breadcrumb" className='detail-breadcrumb'>
      <ol className="breadcrumb my-4">
        {children}
      </ol>
    </nav>
  )
}
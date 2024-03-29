import React from 'react'

export default function Header(children, title,styleClass) {
  return (
    <header>
        <div className="container-fluid">
            <div className="col text-center">
                ${styleClass}
                <div className="col text-center">
                    <h1 className="text-light text-uppercase display-3 letter-spaceing text-slignited">
                        {title}
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    </header>
  )
  Header.defaultProps = {
    title: 'default title',
    styleClass:'header-hero'
  }
}

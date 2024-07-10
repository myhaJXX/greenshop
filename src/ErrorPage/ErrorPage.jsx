import React from 'react'
import cl from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <section className={cl.cont}>
        <h1>404</h1>
        <h2>Sorry, page is not available</h2>
    </section>
  )
}

export default ErrorPage
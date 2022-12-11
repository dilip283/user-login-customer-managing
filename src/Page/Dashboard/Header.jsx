import React from 'react'

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1>Customer Manage</h1>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-lg-6 my5'>
            <button onClick={() => setIsAdding(true)} className='round-button'>Add Customer</button>
          </div>
          
        </div>
      </div>


    </header>
  )
}

export default Header

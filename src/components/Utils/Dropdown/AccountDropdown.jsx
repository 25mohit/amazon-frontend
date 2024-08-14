import React from 'react'

const AccountDropdown = () => {
  return (
    <div className='account-option drop-md fdc' onClick={e => e.stopPropagation()}>
        <div className="modal-overlay"></div>
        <p>Accounts Options</p>
    </div>
  )
}

export default AccountDropdown
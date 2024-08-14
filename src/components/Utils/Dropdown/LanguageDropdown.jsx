import React from 'react'

const LanguageDropdown = () => {
  return (
    <div className='language-dropdown drop-md fdc' onClick={e => e.stopPropagation()}>
        <div className="modal-overlay"></div>
        <p>Language Dropdown</p>
    </div>
  )
}

export default LanguageDropdown
import React from 'react'
import { LuSearch } from "react-icons/lu";

const SearchResult = ({ searchResult }) => {

  return (
    <div className='search-result fdc'>
        {
            searchResult?.map((dt, index) =>
                <div className="result fx aic" key={index}>
                    <LuSearch />
                    <div dangerouslySetInnerHTML={{__html: dt}}></div>
                </div>
            )
        }
    </div>
  )
}

export default SearchResult
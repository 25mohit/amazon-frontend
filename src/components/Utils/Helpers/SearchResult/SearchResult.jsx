import React, { useEffect, useState } from 'react'
import { LuSearch } from "react-icons/lu";

const SearchResult = ({ searchInput, searchResult }) => {

    const [result, setResult] = useState(searchResult)

    useEffect(() => {
        if (searchInput) {
            const newList = searchResult?.map(dt => {
                const regex = new RegExp(`${searchInput}`, 'gi'); // 'gi' for global and case-insensitive search
                return dt?.replace(regex, `<span>${searchInput}</span>`);
            });
            setResult(newList);
        } else {
            setResult(searchResult); // If no search input, reset to original list
        }
        
    },[searchInput, searchResult])

  return (
    <div className='search-result fdc'>
        {
            result?.map((dt, index) =>
                <div className="result fx aic" key={index}>
                    <LuSearch />
                    <p dangerouslySetInnerHTML={{__html: dt}}></p>
                </div>
            )
        }
    </div>
  )
}

export default SearchResult
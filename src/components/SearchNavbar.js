import React from 'react'
import FixedNavbar from './FixedNavbar';
import SearchNavField from './SearchNavField';




const SearchNavbar = ({form}) => { 
	
	
	
	
    return (
        <>
            <div className="fixed-navbar">
				<FixedNavbar />
				<SearchNavField />						
			</div>

        </>
    )
}

export default SearchNavbar;
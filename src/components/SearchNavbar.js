import React from 'react'
import FixedNavbar from './FixedNavbar';
import SearchNavField from './SearchNavField';




const SearchNavbar = ({form}) => { 
	
	// console.log(adultNumber)
	// console.log(form)
	// setFieldValue('ocup', adultNumber.length)

	// useEffect(() => {
	// 	// if(adultNumber.length>0){
	// 	// adultNumber.map(room=>{
	// 	// })
	// 	// }
	// 	// return () => {
	// 	// 	cleanup
	// 	// }
	// }, [])
	
	
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
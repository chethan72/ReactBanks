import React from "react"

function SearchBar(props)
{
	return (
			<span>
					<input 
						type="text" 
						className="input is-danger" 
						name="searchText" 
						value={props.searchText} 
						onChange={props.handleChange} 
						placeholder="Search here" 
						style={{float: "right", width: "30%"}}/>
			</span>
		)
}

export default SearchBar
import React from "react"

function Favorite(props)
{
	let buttonStyle = props.favorite===true?{color: "crimson", 
					justifyContent: "center", 
					backgroundColor:"crimson", 
					width: "32px", 
					height: "32px", 
					border:"1px solid crimson", 
					borderRadius: "5px"
				}:{color: "crimson", 
					justifyContent: "center", 
					backgroundColor:"white", 
					width: "32px", 
					height: "32px", 
					border:"1px solid crimson", 
					borderRadius: "5px"
				};
	return (
		<button
			value={props.ifsc}
			name="favorite"
			onClick ={props.handleClick} 
			//className={props.favorite===false?"button is-outlined is-danger":"button is-danger"} 
			style={buttonStyle}>
			+
		</button>
	)
}


export default Favorite
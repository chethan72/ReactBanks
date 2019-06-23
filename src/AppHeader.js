import React from "react"

function AppHeader()
{
	const style = {
		width: "100%",
		height: "50px", 
		marginLeft: "0px", 
		padding: "0px 0px 20px 20px	", 
		backgroundColor: "#EA2A4A", 
		color: "#FFF", 
		fontSize: "32px", 
		fontWeight: "bolder" ,
		boxShadow: "5px 5px #333"
	};
	return (
			<div  
				style={style}>
					BANK BRANCHES
			</div>
		)
}

export default AppHeader
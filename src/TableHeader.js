import React from "react"

function TableHeader()
{
	return(
			<div className="box" style={{backgroundColor: "#EA2A4A", margin: "2px", padding: "10px 0px 5px 0px"}}>
				<div className="columns is-centered" style={{ color: "#fff", textAlign: "center", fontSize: "16px", fontWeight: "bolder"}}>
					<div className="column is-1">BANK ID</div>
					<div className="column is-2">BANK NAME</div>
					<div className="column is-2">BRANCH</div>
					<div className="column is-1">IFSC</div>
					<div className="column is-4">ADDRESS</div>
					<div className="column is-1">DISTRICT</div>
					<div className="column is-1" style={{paddingTop: "5px"}}>MARK AS FAVORITE</div>
				</div>
			</div>	
		)
}

export default TableHeader
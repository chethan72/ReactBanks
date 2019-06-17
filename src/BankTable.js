import React from "react"
import Row from "./Row"
function BankTable(props)
{
	const branchComponents = props.data.filteredDetails.map(branch => <Row key={branch.ifsc} branchData={branch} />)
	const currentComponents = branchComponents.slice((props.data.present-1)*props.data.limit,props.data.limit*props.data.present);
	
	return(
		<div>
		<table className="table is-striped is-hoverable" style={{ fontSize: "12px", margin: "30px 0px 20px 60px", alignSelf: "center"}}>
			<thead>
				<tr>
					<th style={{color:"crimson", backgroundColor: "#111", fontSize: "16px"}}>IFSC</th>
					<th style={{color:"crimson", backgroundColor: "#111", fontSize: "16px"}}>BANK ID</th>
					<th style={{color:"crimson", backgroundColor: "#111", fontSize: "16px"}}>BRANCH</th>
					<th style={{color:"crimson", backgroundColor: "#111", fontSize: "16px"}}>ADDRESS</th>
					<th style={{color:"crimson", backgroundColor: "#111", fontSize: "16px"}}>DISTRICT</th>
					<th style={{color:"crimson", backgroundColor: "#111", fontSize: "16px"}}>BANK NAME</th>
					<th style={{color:"crimson", backgroundColor: "#111", fontSize: "16px"}}>MARK AS FAVORITE</th>
				</tr>
			</thead>
			<tbody>
			{currentComponents}
			</tbody>
		</table>
		</div>
	);
}

export default BankTable
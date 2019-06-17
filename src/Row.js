import React from "react"

function Row(props)
{
	return (
		<tr>
			<td>{props.branchData.ifsc}</td>
			<td>{props.branchData.bank_id}</td>
			<td>{props.branchData.branch}</td>
			<td>{props.branchData.address}</td>
			<td>{props.branchData.district}</td>
			<td>{props.branchData.bank_name}</td>
			<td><button className="button is-outlined is-warning" style={{marginLeft: "45%", justifyContent: "center"}}>*</button></td>
		</tr>
	)
}

export default Row
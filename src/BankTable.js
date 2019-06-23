import React from "react"
import Favorite from "./Favorite"
import TableHeader from "./TableHeader"
function BankTable(props)
{
	const branchComponents = props.data.map(
				branch => {
				 return	(<div key={branch.ifsc} className="box" style={{margin: "2px", padding: "8px"}}>
							<div className="columns is-centered" style={{textAlign: "center", color: "#330C33"}}>
								<div className="column is-1" style={{width: "10%"}}>{branch.bank_id}</div>
								<div className="column is-2">{branch.bank_name}</div>
								<div className="column is-2">{branch.branch}</div>
								<div className="column is-1">{branch.ifsc}</div>
								<div className="column is-4">{branch.address}</div>
								<div className="column is-1">{branch.district}</div>
								<div className="column is-1">
									<Favorite ifsc={branch.ifsc} favorite={branch.favorite} handleClick={props.handleClick} />
								</div>
							</div>
						</div>
				)
			}
		)

	return(
		<div>
			<TableHeader />
			<div style={{marginTop: "10px"}}>
					{branchComponents}
			</div>

		</div>
	);
}

export default BankTable
import React from "react"
import Favorite from "./Favorite"
function BankTable(props)
{
	const branchComponents = props.data.map(
				branch => {
				 return	(<div key={branch.ifsc} className="box" style={{margin: "2px", padding: "8px"}}>
							<div className="columns is-centered" style={{textAlign: "center"}}>
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
	
	const colStyle = { color: "#ff3333", textAlign: "center", fontSize: "16px", fontWeight: "bolder"};

	return(
		<div>
			<div className="box" style={{backgroundColor: "#1d1d1d", margin: "2px", padding: "20px 0px 5px 0px"}}>
				<div className="columns is-centered" style={colStyle}>
					<div className="column is-1">BANK ID</div>
					<div className="column is-2">BANK NAME</div>
					<div className="column is-2">BRANCH</div>
					<div className="column is-1">IFSC</div>
					<div className="column is-4">ADDRESS</div>
					<div className="column is-1">DISTRICT</div>
					<div className="column is-1" style={{paddingTop: "5px"}}>MARK AS FAVORITE</div>
				</div>
			</div>	
			
			<div style={{marginTop: "10px"}}>
				{branchComponents}
			</div>

		</div>
	);
}

export default BankTable
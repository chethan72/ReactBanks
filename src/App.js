import React from "react"
import BankTable from "./BankTable"

class App extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			bankDetails: [],
			filteredDetails: [],
			city: "BANGALORE",
			searchText: "",
			first: 1,
			previous: 1,
			present: 1,
			next: 2,
			last: 0,
			limit: 10,
			total: 0,
			isLoading: true

		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount()
	{
		fetch("https://vast-shore-74260.herokuapp.com/banks?city=" + this.state.city)
			.then(response => response.json())
				.then(response => this.setState(prevState => {
													prevState.total = response.length;
													prevState.bankDetails=response; 
													prevState.filteredDetails=response; 
													prevState.first = 1; 
													prevState.previous = 1; 
													prevState.next = 2; 
													prevState.last = parseInt(prevState.total/prevState.limit);
													if(prevState.total%prevState.limit !== 0)
														prevState.last += 1;
													prevState.isLoading = false;
													return prevState;
												}
												, this.handleSubmit(this.state)
								  )
			    );
		
		/*const list = this.state.filteredDetails.map(branch => ++count)
		pages = count/this.state.limit;
		this.setState(
			prevState => {
				prevState.first = 1; 
				prevState.previous = 1; 
				prevState.next = 2; 
				prevState.last = pages;
				return prevState;
			}
		)*/
		console.log(this.state);	
	}

	handleChange(event)
	{
		const {name, value} = event.target;
		if(name === "city")
		{
			this.setState(
					prevState => 
					{
						prevState.city = value;

						return prevState;
					}
			)

			fetch("https://vast-shore-74260.herokuapp.com/banks?city=" + value)
				.then(response => response.json())
					.then(response => this.setState(prevState => {
														prevState.total = response.length;
														prevState.bankDetails=response; 
														prevState.filteredDetails=response; 
														prevState.first = 1; 
														prevState.previous = 1; 
														prevState.next = 2; 
														prevState.searchText = "";
														prevState.last = parseInt(prevState.total/prevState.limit);
														if(prevState.total%prevState.limit !== 0)
															prevState.last += 1;
														return prevState;
													}
									  )
					);
			//console.log(this.state.city);
		}
		else if(name === "limit")
		{
			this.setState(
					prevState => 
					{
						prevState.limit = value;

						return prevState;
					}
			)
		}
		else if(name === "searchText")
		{
			const VALUE = value.toUpperCase();
			this.setState(
					prevState => 
					{
						prevState.searchText = value;

						return prevState;
					}
					, this.handleSubmit(value)
			)

			//console.log(this.state.searchText);

			const filteredData = this.state.bankDetails.filter(
				branch => 
					branch.ifsc.indexOf(VALUE)>=0 || branch.bank_id===value || branch.address.indexOf(VALUE)>=0 || branch.district.indexOf(VALUE)>=0 || branch.bank_name.indexOf(VALUE)>=0 
			)


			this.setState(prevState => {
				prevState.filteredDetails = filteredData; 
				prevState.previous = 1;
				prevState.next = 2;
				prevState.present = 1; 
				return prevState;}
				, this.handleSubmit(value)
			)
		}
	}

	handleSubmit(text)
	{
		console.log(text);
	}


	handleClick(event)
	{
		const {name, value} = event.target;
		console.log(name,value);
		if(name ==="first")
		{
			this.setState(
				prevState => {
					prevState.previous= 1;
					prevState.next= 2;
					prevState.present= 1;
					return prevState;
				}
			)
		}
		else if(name === "last")
		{
			this.setState(
				prevState => {
					prevState.previous= prevState.last-1; 
					prevState.next= prevState.last; 
					prevState.present= prevState.last;
					return prevState;
				}
			)
		}
		else if(name === "previous" && value >= 1)
		{

			this.setState(
				prevState => {
					prevState.next= prevState.present;
					prevState.present= prevState.previous;
					prevState.previous= prevState.previous-1;
					return prevState;
				}
				, this.handleSubmit(this.state)	
			)
		}
		else if(name === "next" && value <= this.state.last)
		{
			this.setState(
				prevState => {
					prevState.previous= prevState.present;
					prevState.present= prevState.next;
					prevState.next= prevState.next+1;
					return prevState;
				}
			)
		}

	}

	render()
	{
		if(this.state.isLoading === true)
			return (<h1>Loading...</h1>)
		else
		return (
			<div>
			<div className="hero" style={{paddingLeft:"10px", backgroundColor: "#222", width: "100%", marginLeft: "0px",fontSize: "32px", fontWeight: "bold", color: "crimson",}}>Bank Branches</div>
			<div style={{backgroundColor: "#eee", margin: "50px 50px"}}>
				<div className="select is-danger" style={{float: "left"}}>
					<select value={this.state.city} name="city" onChange={this.handleChange}>
						<option value="MUMBAI">Mumbai</option>
						<option value="CHENNAI">Chennai</option>
						<option value="PUNE">Pune</option>
						<option value="KOLKATA">Kolkata</option>
						<option value="BANGALORE">Bangalore</option>
					</select>
				</div>
				&nbsp;
				&nbsp;
				<span>
					<input 
						type="text" 
						className="input is-danger" 
						name="searchText" 
						value={this.state.searchText} 
						onChange={this.handleChange} 
						placeholder="Search here" 
						style={{float: "right", width: "30%"}}/>
				</span>
				<BankTable data={this.state} />
			<div className="select is-danger">
				<select value={this.state.limit} name="limit" onChange={this.handleChange}>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
			</div>
			<div style={{float:"right"}}>	
				<Square page={this.state.first} name="first" limit={this.state.limit} handleClick={this.handleClick} />
				<Square page={this.state.previous} name="previous" limit={this.state.limit} handleClick={this.handleClick} />
				<Square page={this.state.present} name={this.state.present} limit={this.state.limit} handleClick={this.handleClick} disabled={true} />
				<Square page={this.state.next} name="next" limit={this.state.limit} handleClick={this.handleClick} />
				<Square page={this.state.last} name="last" limit={this.state.limit} handleClick={this.handleClick} />				
			</div>	
			</div>	
			</div>
		);
	}
}

function Square(props)
	{
	  return (
	      <button
	      	className="button is-danger is-outlined is-normal"
	      	name={props.name} 
	        value={props.page}
	        style={{color: "black", backgroundColor: "white"}} 
	        onClick={props.handleClick}
	        disabled = {props.disabled}
	        >
	        {props.name}
	        </button>
	  )
	}


export default App
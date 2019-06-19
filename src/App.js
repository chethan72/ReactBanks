import React from "react"
import BankTable from "./BankTable"

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			city: props.city,
			bankDetails: JSON.parse(localStorage.getItem("bankDetails"+props.city)) || [],
			searchText: "",
			present: 1,
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
		let len = 0;
		for(let x of this.state.bankDetails) len++;
		if(len === 0)
		{
		fetch("https://vast-shore-74260.herokuapp.com/banks?city=" + this.state.city)
			.then(response => response.json())
				.then(response => {
					response.map(data => { data.favorite = false; return data;});
		
					this.setState(
						prevState => {
							prevState.total = response.length;
							prevState.bankDetails=response; 
							prevState.filteredDetails=response;
							prevState.present = 1; 
							prevState.last = parseInt(prevState.total/prevState.limit);
							if(prevState.total%prevState.limit !== 0)
								prevState.last += 1;
							prevState.isLoading = false;
							return prevState;
						}
						, () => {localStorage.setItem("bankDetails"+this.state.city, JSON.stringify(this.state.bankDetails));}
					);});
		}
		else
			this.setState(prevState => { 
				prevState.total = len;
				prevState.last = parseInt(prevState.total/prevState.limit);
				if(prevState.total%prevState.limit !== 0)
								prevState.last += 1;
				prevState.isLoading = false; 
				return prevState; 
			});
		//console.log(this.state);	
	}

	handleChange(event)
	{
		const {name, value} = event.target;
		if(name === "city")
		{
			//localStorage.setItem("bankDetails"+this.state.city, JSON.stringify(this.state.bankDetails));

			this.setState({isLoading: true});

			this.setState(
					prevState => 
					{
						prevState.bankDetails = JSON.parse(localStorage.getItem("bankDetails"+value)) || []
						prevState.city = value;
						prevState.searchText = "";
						prevState.present = 1;

						return prevState;
					}
			)
			let len =0;
			for(let x of this.state.bankDetails) len++;
			if (len===0)
			{
			fetch("https://vast-shore-74260.herokuapp.com/banks?city=" + value)
				.then(response => response.json())
					.then(response => {
							response.map(data => { data.favorite = false; return data;});
		
							this.setState(
								prevState => {
									prevState.total = response.length;
									prevState.bankDetails=response; 
									prevState.present = 1; 
									prevState.last = parseInt(prevState.total/prevState.limit);
									if(prevState.total%prevState.limit !== 0)
										prevState.last += 1;
									prevState.isLoading = false;
									return prevState;
								}
								, () => {localStorage.setItem("bankDetails"+value, JSON.stringify(this.state.bankDetails));}
							);
						});
			}
			else
			{
				this.setState(
					prevState => {
						prevState.isLoading= false;
						return prevState;
					}
				)
			}

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
			this.setState(
					prevState => 
					{
						prevState.searchText = value;
						prevState.present = 1; 

						return prevState;
					}
					, this.handleSubmit(value)
			)
			//console.log(this.state.searchText);
		}
	}

	handleSubmit(text)
	{
		//console.log(text);
	}


	handleClick(event)
	{
		const {name, value} = event.target;
		//console.log(name,value);
		if(name ==="first")
		{
			this.setState(prevState => { prevState.present= 1; return prevState;})
		}
		else if(name === "last")
		{
			this.setState(prevState => { prevState.present= parseInt(value); prevState.last= parseInt(value); return prevState;})
		}
		else if(name === "previous" && parseInt(value) > 1)
		{
			this.setState(prevState => { prevState.present= parseInt(value)-1; return prevState;}, this.handleSubmit(this.state))
		}
		else if(name === "next")
		{
			console.log(name, parseInt(value), this.state.last);
			if(this.state.last > value)
			{
				console.log(name, value);
				this.setState(prevState => { prevState.present= parseInt(value)+1; return prevState; })
			}
		}
		else if(name === "favorite")
		{
			//console.log(value);
			this.setState( prevState => {
					const branchIndex = prevState.bankDetails.findIndex(branch => branch.ifsc===value);
					prevState.bankDetails[branchIndex].favorite =!prevState.bankDetails[branchIndex].favorite;
					console.log(prevState.bankDetails[branchIndex].favorite);
					return prevState;
				}
				, () => {localStorage.setItem("bankDetails"+this.state.city, JSON.stringify(this.state.bankDetails));}
			)
			
		}
		else if(name === "favorites")
		{
			this.setState( prevState => {
				prevState.bankDetails = prevState.bankDetails.filter(branch => branch.favorite===true)
				prevState.present = 1;
				return prevState;
			})
		}

	}

	render()
	{
		const filteredData = this.state.bankDetails.filter(
				branch => 
					branch.ifsc.indexOf(this.state.searchText.toUpperCase())>=0 || 
					branch.bank_id===parseInt(this.state.searchText.toUpperCase()) || 
					branch.address.indexOf(this.state.searchText.toUpperCase())>=0 || 
					branch.district.indexOf(this.state.searchText)>=0 || 
					branch.bank_name.indexOf(this.state.searchText.toUpperCase())>=0 
			)

		const startOffset = (this.state.present-1)*this.state.limit;
		const endOffset = this.state.present*this.state.limit;
		const pageData = filteredData.slice(startOffset, endOffset);
		let numberOfEntries = 0;
		for(let x of filteredData) 
				numberOfEntries++;
		const lastPage = parseInt(numberOfEntries/this.state.limit) + 1;
		//console.log(lastPage)

		const marginFifty = {margin: "10px 50px 10px 50px", padding: "10px" };
		const cities = ["MUMBAI", "CHENNAI", "PUNE", "LUCKNOW", "KOLKATA", "BANGALORE"].map(city => <option key={city} value={city}>{city}</option>);
		const rowsPerPage = [10, 25, 50, 100].map(value => <option key={value} value={value}>{value}</option>);
	


		if(this.state.isLoading === true)
			return (<h1>Loading...</h1>)
		else
		return (
			<div style={{color: "black"}}>
			<div className="box" style={{margin: "0px", padding: "10px", backgroundColor: "#1d1d1d", color: "#ff3333", fontSize: "32px", fontWeight: "bolder" }}>BANK BRANCHES</div>
			<div className="box" style={marginFifty}>
				<div className="select is-danger">
					<select value={this.state.city} name="city" onChange={this.handleChange}>
						{cities}
					</select>
				</div>
				&nbsp;
				&nbsp;
				<button name="favorites" onClick={this.handleClick} className="button is-danger">YOUR FAVORITES</button>
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
			</div>
			<div className="box" style={marginFifty}>
				<BankTable data={pageData} handleClick={this.handleClick} />
			</div>
			<div className="box" style={marginFifty}>
			<div className="select is-danger">
				<select value={this.state.limit} name="limit" onChange={this.handleChange}>
					{rowsPerPage}
				</select>
			</div>
			<div style={{float:"right"}}>	
				<Square page={1} name="first" handleClick={this.handleClick} />
				<Square page={this.state.present} name="previous" handleClick={this.handleClick} />
				<Square page={this.state.present} name={this.state.present} handleClick={this.handleClick} disabled={true} />
				<Square page={this.state.present} name="next" handleClick={this.handleClick} />
				<Square page={lastPage} name="last" handleClick={this.handleClick} />				
			</div>
			</div>	
			</div>	
		);
	}
}

function Square(props)
{
 	return (
    	<button className="button is-danger is-outlined" name={props.name} value={props.page} onClick={props.handleClick}>
        	{props.name}
        </button>
  	)
}

export default App
import React from "react"

function Pagination(props)
{
	const style = "button is-danger is-outlined";
	return (
			<div style={{float:"right"}}>	
				<button className={style} name="first" value="1" onClick={props.handleClick}> FIRST </button>&nbsp;
				<button className={style} name="previous" value={props.offset.present} onClick={props.handleClick}> PREVIOUS </button>&nbsp;
				<button className={style} name="present" value={props.offset.present} onClick={props.handleClick}> {props.offset.present} </button>&nbsp;
				<button className={style} name="next" value={props.offset.present} onClick={props.handleClick}> NEXT </button>&nbsp;
				<button className={style} name="last" value={props.lastPage} onClick={props.handleClick}> LAST </button>
			</div>
		)
}

export default Pagination
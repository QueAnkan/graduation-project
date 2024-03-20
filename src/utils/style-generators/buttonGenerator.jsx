

const Button = ({children, style = 'default', ...props }) => {
	let styleClass = "w-fit h-fit bg-darkblue rounded-full py-2 px-4 text-white";

	if (style === "transparent"){
		styleClass = "flex items-center rounded-md border border-darkgray bg-transparent p-0"
	}
	if(style === "transparent-square"){
		styleClass = "flex flex-col items-center rounded-md border border-darkgray bg-transparent p-0"
	}
	if(style === "delete"){
		styleClass = "flex items-center rounded-md border border-darkblue border-2 bg-lightwhite p-0"
	}

	return(
	<button className= {`btn ${styleClass}`} {...props}>{children}</button>
	)
}

export default Button
import { NavLink, useRouteError } from "react-router-dom"


const ErrorPage = () => {
	let error = useRouteError();
	console.error(error);
	return(
		<div>
			<h2>Den här sidan verkar inte finnas.</h2>
			<p> <NavLink to= '/'> Klicka här för att komma tillbaka till startsidan</NavLink></p>
		</div>
	)
}

export default ErrorPage
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"


const Root = () => {

	return(

	<>
	<Header/>
	<main>
		<Outlet/>
		<Footer/>
	</main>
	
	<Navigation/>
	</>
	)
}

export default Root
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SearchOverlay from "../components/SearchOverlay"
import "/src/base.css"


const Root = () => {

	return(

	<div className="flex flex-col">
		<Header/>
		<main className="mt-[150px] mx-auto max-w-5xl h-screen h-svh">
			<Outlet/>
			<Footer/>
			<SearchOverlay/>
		</main>	
		<Navigation/>
	</div>
	)
}

export default Root
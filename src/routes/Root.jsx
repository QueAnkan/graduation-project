import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SearchOverlay from "../components/SearchOverlay"
import "/src/base.css"
import VisibleButtonsProvider from "../utils/VisibleButtonsProvider";

const Root = () => {

	return(
<VisibleButtonsProvider>
	<div className="flex flex-col">
		<Header/>
		<main className="mt-[150px] mb-10  mx-auto max-w-5xl h-screen h-svh relative">
			<Outlet/>
			<Footer/>
		</main>	
		<Navigation/>
	</div>
	</VisibleButtonsProvider>
	)
}

export default Root
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SearchOverlay from "../components/SearchOverlay"
import "/src/base.css"
import VisibleElementProvider from "../utils/VisibleElementProvider";

const Root = () => {

	return(
<VisibleElementProvider>
	<div className="flex flex-col">
		<Header/>
		<main className="mt-[150px] mb-20 mx-auto max-w-5xl h-fit  relative">
			<Outlet/>
			<Footer/>
		</main>	
		<Navigation/>
	</div>
	</VisibleElementProvider>
	)
}

export default Root
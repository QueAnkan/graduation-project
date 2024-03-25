import {createBrowserRouter} from "react-router-dom"
import Root from "./routes/Root"
import LandingPage from "./routes/LandingPage"
import Monday from "./routes/Monday"
import Tuesday from "./routes/Tueday"
import Wednesday from "./routes/Wednesday"
import Thursday from "./routes/Thursday"
import Friday from "./routes/Friday"
import Saturday from "./routes/Saturday"
import Sunday from "./routes/Sunday"
import ErrorPage from "./routes/ErrorPage"
import Admin from "./routes/Admin"
import Login from "./routes/Login"

const router = createBrowserRouter([

	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path:"/",
				element: <LandingPage/>
			},
			{
				path: "/monday",
				element: <Monday/>
			},
			{
				path: "/tuesday",
				element: <Tuesday/>
			},
			{
				path: "/wednesday",
				element: <Wednesday/>
			},
			{
				path: "/thursday",
				element: <Thursday/>
			},
			{
				path: "/friday",
				element: <Friday/>
			},
			{
				path: "/saturday",
				element: <Saturday/>
			},
			{
				path: "/sunday",
				element: <Sunday/>
			},
			{
				path: "/login", 
				element: <Login />
			},
			{
				path: "/admin", 
				element: <Admin/>
			},
		],
		errorElement: <ErrorPage/>
	}
])

export default router
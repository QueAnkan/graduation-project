import {MdHomeFilled, MdCalendarToday, MdEdit, MdPerson} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

	return(
		<div className='fixed bottom-0 left-0 w-full bg-white border-t-2 border-lightwhite'>
			<nav className='flex justify-center'>
				<ul className='flex text-center w-full sd: flex justify-evenly max-w-[35rem] lg:hidden' >
					<NavLink to="/" className="grid justify-items-center p-2 text-[10px] text-darkblue"> <MdHomeFilled className='size-7' />Till startsida </NavLink>
					<NavLink to="/monday" className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdCalendarToday className='size-7'/> Min veckovy</NavLink>
					<li className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdEdit className='size-7'/> Redigera veckovy</li>
					<NavLink to="/admin" className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdPerson className='size-7'/> Admin</NavLink>
				</ul> 
				</nav>
		</div>
	)
}

export default Navigation
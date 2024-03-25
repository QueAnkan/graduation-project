import {MdHomeFilled, MdCalendarToday, MdEdit, MdPerson} from 'react-icons/md'
import { useVisibilityStatus } from '../utils/VisibleElementProvider'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

	const {toggleIsVisible} = useVisibilityStatus()

	const handleOnclick = () => {
		toggleIsVisible()
		console.log('click');
	}

	return(
		<div className='fixed bottom-0 left-0 w-full bg-white border-t-2 border-lightwhite'>
			<nav className='flex justify-center'>
				<ul className='flex text-center w-full sd: flex justify-evenly max-w-[35rem] lg:hidden' >
					<NavLink to="/" >	
						<li className="grid justify-items-center p-2 text-[10px] text-darkblue"> <MdHomeFilled className='size-7' />Till startsida 	</li>
					</NavLink>
					<NavLink to="/monday" > 
						<li className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdCalendarToday className='size-7'/> Min veckovy </li>
					</NavLink>
					<li 
						onClick={handleOnclick}
						tabIndex={0}
						className="grid justify-items-center p-2 text-[10px] text-darkblue cursor-pointer"><MdEdit className='size-7'/> Redigera veckovy</li>
					<NavLink to="/admin" >		
						<li className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdPerson className='size-7'/> Admin </li>
					</NavLink>
				</ul> 
			</nav>
		</div>
	)
}

export default Navigation
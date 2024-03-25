import {MdHomeFilled, MdCalendarToday, MdEdit, MdPerson, MdFacebook} from 'react-icons/md'
import { FaInstagram } from "react-icons/fa";
import { useVisibilityStatus } from '../utils/VisibleElementProvider'
import { NavLink } from 'react-router-dom';

const Header = () => {

	const {toggleIsVisible} = useVisibilityStatus()

	const handleOnclick = () => {
		toggleIsVisible()
		console.log('click');
	}

	return(
		<header className="w-full h-[150px] z-10 bg-white fixed drop-shadow-md">
			<div className="sm: grid grid-rows-1 justify-items-center lg:flex justify-around items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="font-display text-darkblue text-3xl sm:text-4xl lg:text-4xl">Bildstöd i vardagen</h1>
				</div>
				<nav>
					<ul className="hidden lg:flex"  >
						<NavLink to="/">
							<li className="grid justify-items-center text-sm text-darkblue "> <MdHomeFilled className='size-7' />Till startsida </li>
						</NavLink>
						<NavLink to="/monday">
							<li className="grid justify-items-center text-sm text-darkblue"><MdCalendarToday className='size-7'/> Min veckovy</li>
						</NavLink>
						<li 
							onClick={handleOnclick}
							tabIndex={0}
							className="grid justify-items-center text-sm text-darkblue cursor-pointer focus:focus	"><MdEdit className='size-7'/> Redigera veckovy
						</li>			
						<NavLink to="/admin">
							<li className="grid justify-items-center text-sm text-darkblue"><MdPerson className='size-7'/> Admin</li>
						</NavLink>
					</ul> 
				</nav>
				<div className="hidden lg:flex">
					<div className='flex flex-col'>
						<h5 className='p-1 font-bold text-darkblue'>Kontakta oss: </h5>
						<p className='p-1 pb-3 text-darkblue'>support@bildstod.se</p>
						<div className='flex flex-row'>
							<p className='p-2 pr-3 text-darkblue'><MdFacebook className='size-7'/></p>
							<p className='p-2 text-darkblue'><FaInstagram className='size-7'/></p>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
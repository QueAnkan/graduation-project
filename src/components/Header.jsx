import {MdHomeFilled, MdCalendarToday, MdEdit, MdPerson, MdFacebook} from 'react-icons/md'
import { FaInstagram } from "react-icons/fa";

const Header = () => {

	return(
		<header className="w-screen h-[150px] z-10 bg-white fixed drop-shadow-lg">
			<div className="sm: grid grid-rows-1 justify-items-center lg:flex justify-around items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="font-display text-3xl text-blue-900 sm: text-center lg:text-4xl">Bildstöd i vardagen</h1>
				</div>
				<nav>
				<ul className="hidden lg:flex"  >
					<li className="grid justify-items-center"> <MdHomeFilled className='size-7' />Till startsida </li>
					<li className="grid justify-items-center"><MdCalendarToday className='size-7'/> Min veckovy</li>
					<li className="grid justify-items-center"><MdEdit className='size-7'/> Redigera veckovy</li>
					<li className="grid justify-items-center"><MdPerson className='size-7'/> Admin</li>
				</ul>
				</nav>
				<div className="hidden lg:flex">
					<div className='flex flex-col'>
						<p className='p-1'>Kontakta oss: </p>
						<p className='p-1 pb-3'>support@bildstod.se</p>
						<div className='flex flex-row'>
							<p className='p-2 pr-3'><MdFacebook className='size-7'/></p>
							<p className='p-2'><FaInstagram className='size-7'/></p>
						</div>
					</div>
				</div>
			</div>
		</header>
	)

}

export default Header
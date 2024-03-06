import {MdHomeFilled, MdCalendarToday, MdEdit, MdPerson} from 'react-icons/md'

const Navigation = () => {

	return(
		<div className='fixed bottom-0 left-0 w-full bg-transparent'>
			<nav className='flex justify-center max-w-50 '>
				<ul className='flex text-center sm:w-full flex justify-evenly lg:hidden' >
					<li className="grid justify-items-center p-2 text-[10px] text-darkblue"> <MdHomeFilled className='size-7' />Till startsida </li>
					<li className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdCalendarToday className='size-7'/> Min veckovy</li>
					<li className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdEdit className='size-7'/> Redigera veckovy</li>
					<li className="grid justify-items-center p-2 text-[10px] text-darkblue"><MdPerson className='size-7'/> Admin</li>
				</ul> 
				</nav>

		</div>
	)
}

export default Navigation
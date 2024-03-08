import {MdFacebook} from 'react-icons/md'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

	return (
		<div className="flex flex justify-center w-full flex absolute  bottom-20 lg:hidden">
			<div className='flex flex-col justify-center'>
				<h5 className='p-1 font-bold text-darkblue flex justify-center'>Kontakta oss: </h5>
				<p className='p-1 pb-3 text-darkblue'>support@bildstod.se</p>
				<div className='flex flex-row justify-center'>
					<p className='p-2 pr-3 text-darkblue'><MdFacebook className='size-7'/></p>
					<p className='p-2 text-darkblue'><FaInstagram className='size-7'/></p>
				</div>
			</div>
		</div>
	)
}

export default Footer
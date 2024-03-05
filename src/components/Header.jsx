import {FaHome, FaEdit, FaCog} from 'react-icons/fa'

const Header = () => {

	return(
		<div className="w-screen h-[150px] z-10 bg-white fixed drop-shadow-lg">
			<div className="px-6 flex justify-between items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="font-display text-3xl text-blue-900 text-center lg:text-4xl">Bildstöd i vardagen</h1>
				</div>
				<ul className="hidden lg:flex">
					<li><FaHome /> Till Startsida </li>
					<li>icon Min Veckovy</li>
					<li><FaEdit /> Redigera veckovy</li>
					<li><FaCog /> Admin</li>
				</ul>
				<div className="hidden lg:flex">
					<p>Kontakta oss:</p>
					<p>support@bildstod.se</p>
					<p>icon</p>
					<p>icon</p>
				</div>
			</div>
		</div>
	)

}

export default Header
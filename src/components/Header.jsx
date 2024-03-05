


const Header = () => {

	return(
		<div className="w-screen h-[150px] z-10 bg-white fixed drop-shadow-lg">
			<div className="px-7 flex justify-between items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="font-merienda text-3xl sm: text-blue-900">Bildstöd i vardagen</h1>
				</div>
				<ul className="hidden md:flex">
					<li>icon. Till Startsida </li>
					<li>icon Min Veckovy</li>
					<li>icon Redigera veckovy</li>
					<li> icon Admin</li>
				</ul>
			</div>
		</div>
	)

}

export default Header
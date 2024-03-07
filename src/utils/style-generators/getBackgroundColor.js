

const getBgColor = (view) => {
	switch(view) {
		case 'Måndag':
			return "bg-green";
		case 'Tisdag':
			return "bg-lightblue";
		case "Onsdag":
			return "bg-white";
		case "Torsdag":
			return "bg-brown";
		case "Fredag":
			return "bg-yellow";
		case "Lördag": 
			return "bg-pink";
		case "Söndag":
			return "bg-red"	
		}
	
	}

	export default getBgColor
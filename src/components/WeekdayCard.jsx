import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const WeekdayCard = () => {

	return( 
	<>
	<h1>Planera ditt veckoschema</h1>
		<article>Här kan du lätt lägga upp bilder för att planera 
			upp dagens och veckans aktiviteter. På ett 
			aktivitetskort kan du lägga till fler bilder för att 
			bryta ner varje aktivitet för en mer detaljerad 
			överblick för det valda aktivitetskortet. Du kan 
			även ta bort bilder ifall du ångrar ditt val.  
		</article>
		<section className="flex ">
		<button><TfiArrowCircleLeft /></button>
		<h2></h2>
		<button><TfiArrowCircleRight /></button>
		</section>
		<section>
			<button>Ta bort bild</button>
			<div>(img-container)</div>
			<button>Fler bilder</button>
			<button>Lägg till bild</button>
		</section>	
	</>)
}

export default WeekdayCard
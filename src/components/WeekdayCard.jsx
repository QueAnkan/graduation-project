import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import getBgColor from "../utils/api-functions/validations/style-generators/getBackgroundColor";


const WeekdayCard = (props) => {

	const bgColorClassName = getBgColor(props.view)

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
		<section className={`${bgColorClassName}`}>
			<section className="flex justify-center">
				<button><TfiArrowCircleLeft /></button>
				<h2>{props.view}</h2>
				<button><TfiArrowCircleRight /></button>
			</section>
			<section className="flex flex-col items-center">
				<button>Ta bort bild</button>
				<div className="bg-lightgray">(img-container)
					<img src="" alt="" />
				</div>
				<button>Fler bilder</button>
				<button>Lägg till bild</button>
			</section>	
		</section>
	</>)
}

export default WeekdayCard





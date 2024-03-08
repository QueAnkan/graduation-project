import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import getBgColor from "../utils/style-generators/getBackgroundColor";
import Button from "../utils/style-generators/buttonGenerator";
import ImageContainer from "./ImageContainer";


const WeekdayCard = (props) => {

	const bgColorClassName = getBgColor(props.view)

	return( 
	<>
		<article className="mx-auto my-4 w-10/12 text-center lg:my-10" >
			<h1 className="text-xl font-bold py-4">Planera ditt veckoschema</h1>
			<p>Här kan du lätt välja bilder för att planera 
				upp dagens och veckans aktiviteter. På varje 
				dag kan du lägga till fler bilder. Klickar du på detaljerad vy kan du lägga till fler bilder för varje aktivitet under dagen för att bryta ner den ännu mer. Du kan även ta bort bilder ifall du ångrar ditt val.  
			</p>
		</article>


		<section className="flex justify-center item-center relative w-10/12 mx-auto my-6 md:mt-10" >
			<button aria-label="Byt veckodag bakåt" className="  left-[calc(64+30)] top-0 sm:left-12 md:absolute md:left-8 md:top-60"><TfiArrowCircleLeft size={30} /></button>
			<h2 className="text-2xl mx-10">{props.view}</h2>
			<button aria-label="Byt veckodag framåt" className=" right-[calc(64+30)] top-0 sm:right-12 md:absolute md:right-8 md:top-60"><TfiArrowCircleRight size={30} /></button>
		</section>


		<section className={`${bgColorClassName} flex flex-col rounded-md w-10/12 mx-auto my-4 px-4 py-10 md:w-fit md:px-16`} >
			<section className="flex flex-col items-center w-fit mx-auto">	
				<ImageContainer/>
			</section>	
			<span className="mx-auto inline-block my-8 ">
				<Button>Lägg till bild</Button>
			</span>
			<span className="mx-auto inline-block"><Button >Stäng redigeringsvy</Button></span>
		</section>
	</>)
}

export default WeekdayCard

/* TODO: 
	-kolla var title ska vara till bilden! ska den ligga på eller under bilden??

	-Mappa ut ImageContainer 
*/



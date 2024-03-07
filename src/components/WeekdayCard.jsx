import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import getBgColor from "../utils/style-generators/getBackgroundColor";
import Button from "../utils/style-generators/buttonGenerator";


const WeekdayCard = (props) => {

	const bgColorClassName = getBgColor(props.view)

	return( 
	<>
		<section className="mx-auto my-4 w-10/12 text-center" >
			<h1 className="text-xl font-bold py-4">Planera ditt veckoschema</h1>
			<article>Här kan du lätt lägga upp bilder för att planera 
				upp dagens och veckans aktiviteter. På ett 
				aktivitetskort kan du lägga till fler bilder för att 
				bryta ner varje aktivitet för en mer detaljerad 
				överblick för det valda aktivitetskortet. Du kan 
				även ta bort bilder ifall du ångrar ditt val.  
			</article>
		</section>

		<section className="flex justify-center item-center w-10/12 mx-auto my-6">
			<button aria-label="Byt veckodag bakåt"><TfiArrowCircleLeft size={30} /></button>
			<h2 className="text-2xl mx-10">{props.view}</h2>
			<button aria-label="Byt veckodag framåt"><TfiArrowCircleRight size={30} /></button>
		</section>

		<section className={`${bgColorClassName} rounded-md w-10/12 mx-auto my-4 px-4 py-10`} >
			<section className="flex flex-col items-center w-fit mx-auto">	
				<div className=" grid bg-lightgray rounded-sm min-w-60 min-h-60 relative">
					<span className="absolute right-0">
						<Button style="transparent">
							<p>Ta bort bild </p> 
							<p > <RiDeleteBin6Line size={30} /> </p>
						</Button>
					</span>
					<img src="" alt="" />
				</div>
				<span className="self-end">
					<Button style="transparent" ><p>Fler bilder</p>
					<p><HiOutlineSquare2Stack  size={40} /></p></Button>
				</span>
			</section>	
			<span className="mx-auto">
				<Button>Lägg till bild</Button>
			</span>
		</section>
	</>)
}

export default WeekdayCard

/* TODO: 
	-kolla var title ska vara till bilden! ska den ligga på eller under bilden??

	- Kolla varför nedersta span/button inte hamnar i mitten!
*/



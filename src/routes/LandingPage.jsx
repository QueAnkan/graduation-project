import fiveKids from '../assets/fivekidsinagroup.jpg' 
import adultChild from '../assets/adultandchild.jpg'

const LandingPage = () => {

	return (
		<section className='flex flex-col lg:mt-[150px] sm:justify-start lg:justify-center'>
			<div className='m-2 sm:grid sm:grid-cols-2 gap-8 items-center sm:mt-5'>
				<img 
					src={fiveKids} 
					alt="Five children of different nationalities are sitting on a bench"
					className='rounded-full w-full h-auto max-w-md mx-auto sm:w-full md:w-full lg:w-full'
				/>
				<article className='mt-5 max-w-[26rem] flex-col items-center'>
					<h1 className='font-bold mt-5 p-2 text-lg w-full md:text-2xl lg:text-3xl lg:w-full'> Välkommen till Bildstöd i vardagen, varje dag är unik! </h1>
					<h2 className='mt-3 font-bold p-2'>Med Bildstöd i vardagen kan du:</h2>
					<p className='px-2'>Använd bilder för att illustrera dagens aktiviteter för en tydlig struktur. I framtiden ska vi utveckla vår sida till att du ska kunna klicka på en bild för att visa fler bilder som bryter ner aktiviteten i lättförstådda steg. Perfekt för att förbereda och minska oro. </p>
				</article>
			</div>
			<div className='m-2 grid sm:grid-cols-2 gap-1 items-center sm:mt-10 mb-20'>
				<img 
					src={adultChild}
					alt="Female adult and a child sitting together and look at a mobilephone"
					className='rounded-md w-full h-auto max-w-sm mx-auto sm:order-last sm:max-w-full md:w-full lg:w-11/12'/>
				<article className='max-w-md sm:order-first md:flex justify-center items-center md:items-center mx-auto'>
					<p className='p-2'>Börja skapa veckoschema med bilder redan nu och få vardagen att bli enklare. Låt barnen vara med och utforska sitt schema. Att göra dem delaktiga hjälper dem att känna sig mer förberedda och trygga.  </p> 
				</article>
			</div>
		</section>
	)
}


export default LandingPage


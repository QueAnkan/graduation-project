import fiveKids from '../assets/fivekidsinagroup.jpg' 
import adultChild from '../assets/adultandchild.jpg'

const LandingPage = () => {

	return (
		<section className='flex flex-col'>
				<div className='mt-2 mx-1 p-2 md:grid-rows-2'>
					<div className='flex'>
						<img 
							src={fiveKids} 
							alt="Five children of different nationalities are sitting on a bench"
							className='rounded-full max-w-full h-auto sm:w-3/4 md:w-1/2 lg:w-1/3'
							/>
					</div>
					<article className='max-w-sm'>
					<h1> Välkommen till Bildstöd i vardagen, där varje dag blir enklare att förstå!</h1>
					<h2 className='font-bold mt-2'>Med Bildstöd i vardagen kan du:</h2>
					<p>Använd bilder för att illustrera dagens aktiviteter för en tydlig struktur. Du kan klicka på en bild för att visa fler bilder som bryter ner aktiviteten i lättförstådda steg. Perfekt för att förbereda och minska oro. </p>
					</article>
				</div>
				<div className='mt-2 mx-1 p-2'>
					<img 
						src={adultChild}
						alt="Female adult and a child sitting together and look at a mobilephone"
						className='rounded-md sm:w-3/4 md:w-1/2 lg:w-1/3'/>
					<article className='max-w-sm'>
						<p>Börja skapa veckoschema med bilder redan nu och få vardagen att bli enklare.Låt barnen vara med och utforska sitt schema. Att göra dem delaktiga hjälper dem att känna sig mer förberedda och trygga.  </p>
					</article>
				</div>
		</section>
	)
}


export default LandingPage

/**/
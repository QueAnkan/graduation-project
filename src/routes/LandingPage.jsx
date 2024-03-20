import fiveKids from '../assets/fivekidsinagroup.jpg' 
import adultChild from '../assets/adultandchild.jpg'

const LandingPage = () => {

	return (
		<section className='flex flex-col min-h-screen sm:justify-start lg:justify-center'>
				<div className='m-2 sm:grid sm:grid-cols-2 gap-10 items-center sm:mt-12'>
						<img 
							src={fiveKids} 
							alt="Five children of different nationalities are sitting on a bench"
							className='rounded-full w-full h-auto max-w-md mx-auto sm:w-full md:w-3/4 lg:w-full'
							/>
					<article className='m-2 max-w-md flex-col items-center '>
					<h1 className='font-bold sm:text-lg'> Välkommen till Bildstöd i vardagen, varje dag är unik! </h1>
					<h2 className='mt-3'>Med Bildstöd i vardagen kan du:</h2>
					<p>Använd bilder för att illustrera dagens aktiviteter för en tydlig struktur. Du kan klicka på en bild för att visa fler bilder som bryter ner aktiviteten i lättförstådda steg. Perfekt för att förbereda och minska oro. </p>
					</article>
				</div>
				<div className='m-2 grid sm:grid-cols-2 gap-1 items-center sm:mt-10'>
					<img 
						src={adultChild}
						alt="Female adult and a child sitting together and look at a mobilephone"
						className='rounded-md w-full h-auto max-w-md mx-auto sm:order-last sm:max-w-full md:w-3/4 lg:w-full'/>
					<article className='max-w-md sm:order-first md:flex justify-center items-center md:items-center mx-auto'>
						<p className='p-2'>Börja skapa veckoschema med bilder redan nu och få vardagen att bli enklare. Låt barnen vara med och utforska sitt schema. Att göra dem delaktiga hjälper dem att känna sig mer förberedda och trygga.  </p> 
					</article>
				</div>
		</section>
	)
}


export default LandingPage


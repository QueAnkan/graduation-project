import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import Button from "../utils/style-generators/buttonGenerator";
import { useVisibilityStatus } from "../utils/VisibleButtonsProvider";

const ImageContainer = ({ images, handleImageDelete }) => {
	const {isVisible} = useVisibilityStatus()

	const handleDelete = (index) => {
		handleImageDelete(index)
	}

	return (
		<>
		<div className="grid bg-lightgray rounded-sm min-w-[230px] max-w-[230px] min-h-[230px] relative sm:min-w-72 sm:max-w-72 sm:min-h-72 md:min-w-80 md:max-w72 md:min-h-80">
			{images.map((image, index) => (
				<div key={index} className="relative m-2">
					<span className="absolute right-0">
						{isVisible && (
							<Button style="transparent" onClick={() => handleDelete(index)}>
								<p>Ta bort bild</p>
								<p>
									<RiDeleteBin6Line size={30} />
								</p>
							</Button>
						)}
					</span>
					<img src={image.imageUrl} alt={image.alt} />
				</div>
			))}
		</div>
		<span className="self-end">
			<Button style="transparent">
				<p>Detaljerad vy</p>
				<p>
					<HiOutlineSquare2Stack size={40} />
				</p>
			</Button>
		</span>
	</>
);
};


export default ImageContainer

/*Gamla koden här


const ImageContainer = ({ image }) => {
	const {isVisible} = useVisibilityStatus()

	return(

		<>
				<div className=" grid bg-lightgray rounded-sm min-w-[230px] max-w-[230px] min-h-[230px] relative sm:min-w-72 sm:max-w-72 sm:min-h-72 md:min-w-80 md:max-w72 md:min-h-80">
					<span className="absolute right-0">
						{isVisible && <Button style="transparent">
							<p>Ta bort bild </p> 
							<p > <RiDeleteBin6Line size={30} /> </p>
						</Button>}
					</span>
					<img src={image.imageUrl} alt={image.alt}/>
				</div>
				<span className="self-end">
					<Button style="transparent" ><p>Detaljerad vy</p>
					<p><HiOutlineSquare2Stack  size={40} /></p></Button>
				</span>
			
		</>
	)
}*/
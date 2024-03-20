import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import Button from "../utils/style-generators/buttonGenerator";
import { useVisibilityStatus } from "../utils/VisibleElementProvider";
import DetailView from "./Detailview";


const ImageContainer = ({ images, handleImageDelete}) => {
	const {isVisible} = useVisibilityStatus()
	const [isDetailViewOpen, setIsDetailViewOpen] = useState(false); 


	const handleDelete = (index) => {
		handleImageDelete(index)
	}
	
	const handleDetailView = () => {
		setIsDetailViewOpen(!isDetailViewOpen)
	}

	return (
		<>
		<div className={`grid gap-16  min-w-[230px] max-w-[230px] min-h-[230px] relative sm:min-w-72 sm:max-w-72 sm:min-h-72 md:min-w-80 md:max-w72 md:min-h-80 ${images.length > 0 ? "border-0" : "border border-darkblue rounded-sm bg-white" }`}>
		{isDetailViewOpen && <DetailView />}
			{images.map((image, index) => (
				<div key={index} className="relative">
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
					<div className="border border-darkblue rounded-sm bg-white text-center">
					<img  src={image.imageUrl} alt={image.alt} />
					<p className="text-xl font-bold">{image.title}</p>
					</div>
		<span className=" absolute right-0">
			<Button style="transparent" onClick={handleDetailView}>
				<p>Detaljerad vy</p>
				<p>
					<HiOutlineSquare2Stack size={40} />
				</p>
			</Button>
		</span>
		
				</div>
			))}
		</div>
	</>
);
};


export default ImageContainer

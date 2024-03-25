
export const saveImagesToLocalStorage = (key, images) => {
	localStorage.setItem(key, JSON.stringify(images));
};

export const getImagesFromLocalStorage = (key) => {
	const images = localStorage.getItem(key);
	return images ? JSON.parse(images) : [];
};
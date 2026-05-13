import Slideshow from "./components/Media/Slideshow";

export default function Home() {
	return (
		<main>
			<Slideshow interactable={false} heroTextVisible={true} />
		</main>
	);
}
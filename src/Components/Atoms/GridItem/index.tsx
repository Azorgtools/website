import { title } from "process";
import { FunctionComponent } from "react"
import ReactPlayer from "react-player"
import Dropdown from "../../Molecules/knop"


export interface ItemProps {
	text: string;
	videoUrl: string;
	imgSrc: string;
	textExplaination: string;

}


const GridItem: FunctionComponent<ItemProps> = ({
	text,
	videoUrl,
	imgSrc,
	textExplaination
}) => {
	return (
		<div className="grid-item">
			<div className="upper-section">
			<Dropdown buttonText="i">
					<h1 className="center-text">{text}</h1>
					<div className="dropdown-item__text">
						<p>{textExplaination}</p>
					</div>

					<h2 className="center-text" >Uitleg</h2>
					<ReactPlayer className="dropdown-video" height="auto" width="100%" borderRadius="0.25rem" url={videoUrl} />
				</Dropdown>
				<div className="text-upper-section">
					<p>{text}</p>
				</div>




			</div>




			<div className="grid-item__content">
				<img src={imgSrc} />

			</div>


		</div>
	)
}

export default GridItem
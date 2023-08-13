import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Info } from "./components/information/information";
import "./styles/home.scss";
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
	return (
		<main className="container">
			<Header />
			<Experience />
			<Info />
			<div className="buttons">
				<SocialBtns />
				<a className="primary-btn" href="mailto:irus0ubusiness@gmail.com">
					contact me
					<EmailIcon />
				</a>
			</div>
		</main>
	);
}

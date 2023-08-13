import { Header } from "./components/header/header";
import "./styles/home.scss";

export default function Home() {
	return (
		<main className="container">
			<Header />
			<div className="experience">
				<h3>Experience</h3>
				<p>texto</p>
				<div className="experience-time">{/* TODO LANGUAGES EXPERIENCE */}</div>
				<div className="infos">
					<h3 className="languages"></h3>
					<div className="languages-info">
						<span>En - Fluent</span>
						<span>Pt - Native Speaker</span>
					</div>
					<h3>Education</h3>
					<div className="educational-info">
						<span>🎓</span>
						<span>
							Engenharia informática - Instituto politécnico de Setúbal
						</span>
					</div>
				</div>
				<div className="buttons">
					<div className="social"></div>
					<button>contact me</button>
				</div>
			</div>
		</main>
	);
}

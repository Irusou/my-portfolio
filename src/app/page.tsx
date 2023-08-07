import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="header">
				<Image
					src="/vercel.svg"
					alt="Vercel Logo"
					width={100}
					height={24}
					priority
				/>
				<div>
					<h1>Hi, im João!</h1>
					<h2>Software Engineer</h2>
				</div>
				<div className="experience">
					<h3>Experience</h3>
					<p>texto</p>
					<div className="experience-time">
						{/* TODO LANGUAGES EXPERIENCE */}
					</div>
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
			</div>
		</main>
	);
}

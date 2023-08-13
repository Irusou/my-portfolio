import "./information.scss";
import { SectionTitle } from "./../sectionTitle/section-title";

export function Info() {
	return (
		<div className="infos">
			<SectionTitle text={"languages"} />
			<div className="languages-info">
				<span>EN - Fluent</span>
				<span>Pt - Native Speaker</span>
			</div>
			<SectionTitle text={"Education"} />
			<div className="educational-info">
				<span>🎓</span>
				<span>Software Engineer - Instituto politécnico de Setúbal</span>
			</div>
		</div>
	);
}

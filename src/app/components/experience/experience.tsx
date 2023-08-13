import "./experience.scss";
import { SectionTitle } from "../sectionTitle/section-title";

export function Experience() {
	return (
		<div className="experience">
			<SectionTitle text={"Experience"} />
			<p>
				x years working as a Software Engineer, in companys such as Incompol
			</p>
			<div className="experience-time">{/* TODO LANGUAGES EXPERIENCE */}</div>
		</div>
	);
}

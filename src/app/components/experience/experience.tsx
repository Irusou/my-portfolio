import "./experience.scss";
import { SectionTitle } from "../sectionTitle/section-title";
import LanguageExperience from "../language-experience/languageExperience";

export function Experience() {
	return (
		<div className="experience">
			<SectionTitle text={"Experience"} />
			<p>
				x years working as a Software Engineer, in companies such as Incompol
			</p>
			<div className="experience-time">
				<LanguageExperience imgSrc={"/c.png"} imgSize={45} experienceTime={2} />
				<LanguageExperience
					imgSrc={"/java.png"}
					imgSize={45}
					experienceTime={3}
				/>
				<LanguageExperience
					imgSrc={"/js.png"}
					imgSize={45}
					experienceTime={1}
				/>
				<LanguageExperience
					imgSrc={"/react.png"}
					imgSize={45}
					experienceTime={1}
				/>
			</div>
		</div>
	);
}

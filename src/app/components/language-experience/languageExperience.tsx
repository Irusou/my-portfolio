import Image from "next/image";
import React from "react";
import "./languageExperience.scss";

interface languageExperienceProps {
	imgSrc: string;
	imgSize: number;
	experienceTime: number;
}

export default function LanguageExperience({
	imgSrc,
	imgSize,
	experienceTime,
}: languageExperienceProps) {
	return (
		<>
			<div className="experience-container">
				<Image
					src={imgSrc}
					alt="C Logo"
					width={imgSize}
					height={imgSize}
					priority
				/>
				<div className="experience-unit">
					<div className={`experience-measure measure-${experienceTime}`}>
						{experienceTime == 1 ? (
							<span>{experienceTime} year</span>
						) : (
							<span>{experienceTime} years</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

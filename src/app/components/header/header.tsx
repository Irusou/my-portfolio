import Image from "next/image";
import "./header.scss";

export function Header() {
	return (
		<div className="header">
			<div>
				<h1>Hi, im João! 👋</h1>
				<h2>Software Engineer</h2>
			</div>
			<Image
				src="/eu.jpg"
				alt="Vercel Logo"
				width={270}
				height={250}
				priority
			/>
		</div>
	);
}

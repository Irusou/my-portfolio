import { InstagramIcon } from "./../icons/instagram-icon";
import { LinkdinIcon } from "./../icons/linkdin-icon";
import { GithubIcon } from "./../icons/github-icon";
import { TwitterIcon } from "./../icons/twitter-icon";

import "./social-btns.scss";

export function SocialBtns() {
	return (
		<div className="social">
			<a href="https://www.instagram.com/irus0u/">
				<InstagramIcon />
			</a>
			<a href="https://www.linkedin.com/in/jo%C3%A3o-morais-686994273/">
				<LinkdinIcon />
			</a>
			<a href="https://github.com/Irusou">
				<GithubIcon />
			</a>
			<a href="https://twitter.com/Irus0u">
				<TwitterIcon />
			</a>
		</div>
	);
}

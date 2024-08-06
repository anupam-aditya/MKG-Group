import React from "react";
import "./Experience.css";
import gradCommerce from "../assets/grad-commerce.png";
import volkanoAI from "../assets/volkano-ai.png";
import lemonNerd from "../assets/lemonnerd.png";

const ExperienceSection = () => {
	return (
		<div className="experience-section">
			<h2>Experience</h2>
			<div className="experience-item">
				<img src={gradCommerce} />
				<a target="_blank" href="gradcommerce.com">
					<h3>GradCommerce</h3>
				</a>
				<p>
					Developed a comprehensive marketing and e-commerce platform tailored
					to meet the needs of growing businesses. The project involved
					designing intuitive dashboards, optimizing data processing with cloud
					services, and integrating third-party tools to streamline operations.
				</p>
			</div>
			<div className="experience-item">
				<img src={volkanoAI} />
				<a target="_blank" href="volkano.ai">
					<h3>Volkano.ai</h3>
				</a>
				<p>
					Created Volkano.ai, an innovative platform to assist users in
					generating targeted advertisements effortlessly. Leveraging advanced
					AI tools, the platform simplifies ad creation, helping businesses
					increase their reach and engagement.
				</p>
			</div>
			<div className="experience-item">
				<img src={lemonNerd} />
				<a
					target="_blank"
					href="https://lemonerd-next-app-git-main-harsh27vardhana.vercel.app/"
				>
					<h3>Lemonerd</h3>
				</a>
				<p>
					Developed Lemonerd, a dynamic platform that offers a curated selection
					of articles and resources on technology, startups, and productivity.
					The site features a sleek, user-friendly interface and emphasizes a
					seamless user experience, making it easy for visitors to explore
					content across various topics.
				</p>
			</div>
		</div>
	);
};

export default ExperienceSection;

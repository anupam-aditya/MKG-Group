import React, { useState } from "react";
import "./Features.css";
import AboutUsSection from "./aboutUsSection";
import ExperienceSection from "./experienceSection";
import ContactUsSection from "./contactUsSection";

const Features = () => {
	const [activeFeature, setActiveFeature] = useState("feature1");

	const handleFeatureClick = (feature) => {
		setActiveFeature(feature);
	};

	return (
		<div className="features-container">
			<div className="buttons-container">
				<button
					className={`feature-button ${
						activeFeature === "feature1" ? "active" : ""
					}`}
					onClick={() => handleFeatureClick("feature1")}
				>
					About Us
				</button>
				<button
					className={`feature-button ${
						activeFeature === "feature2" ? "active" : ""
					}`}
					onClick={() => handleFeatureClick("feature2")}
				>
					Experience
				</button>
				<button
					className={`feature-button ${
						activeFeature === "feature3" ? "active" : ""
					}`}
					onClick={() => handleFeatureClick("feature3")}
				>
					Contact Us
				</button>
			</div>

			<div className="content-container">
				{activeFeature === "feature1" && (
					<div className="feature-content feature1">
						<AboutUsSection />
					</div>
				)}
				{activeFeature === "feature2" && (
					<div className="feature-content feature2">
						<ExperienceSection />
					</div>
				)}
				{activeFeature === "feature3" && (
					<div className="feature-content feature3">
						<ContactUsSection />
					</div>
				)}
			</div>
		</div>
	);
};

export default Features;

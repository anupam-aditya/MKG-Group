import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

// const ContactUsSection = () => {
// 	const [isSubmitted, setIsSubmitted] = useState(false);
// 	const [name, setName] = useState("");
// 	const [query, setQuery] = useState("");
// 	const [email, setEmail] = useState("");

// 	const handleSend = (e) => {
// 		e.preventDefault();

// 		const serviceID = "service_xw4kiva";
// 		const templateID = "template_6bqvdtl";
// 		const userID = "your_user_id";

// 		const templateParams = {
// 			user_name: name,
// 			user_email: email,
// 			user_query: query,
// 		};

// 		emailjs
// 			.sendForm(serviceID, templateID, form.current, userID)
// 			.then(
// 				() => {
// 					setIsSending(false);
// 					setIsSubmitted(true);
// 					setUserName(form.current.user_name.value);
// 					setError(null);
// 				},
// 				(error) => {
// 					setIsSending(false);
// 					setError("Failed to send the message. Please try again.");
// 				}
// 			);
// 	};

// 	const handleWriteAgain = () => {
// 		setIsSubmitted(false);
// 		setName("");
// 		setQuery("");
// 		setEmail("");
// 	};

// 	return (
// 		<div className="contact-us-section">
// 			{!isSubmitted ? (
// 				<div className="contact-form fade-in">
// 					<h2>Contact Us</h2>
// 					<form onSubmit={handleSend}>
// 						<input
// 							type="text"
// 							placeholder="Your name"
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 							className="contact-input"
// 							required
// 						/>
// 						<textarea
// 							placeholder="What can we do for you?"
// 							value={query}
// 							onChange={(e) => setQuery(e.target.value)}
// 							className="contact-input"
// 							required
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Your email"
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							className="contact-input"
// 							required
// 						/>
// 						<button type="submit" className="contact-button">
// 							Send
// 						</button>
// 					</form>
// 				</div>
// 			) : (
// 				<div className="thank-you-message fade-in">
// 					<h2>Thank you for reaching out, {name}!</h2>
// 					<p>We will get back to you at the earliest.</p>
// 					<button onClick={handleWriteAgain} className="contact-button">
// 						Write Again
// 					</button>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default ContactUsSection;

// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import "./ContactUs.css";

const ContactUsSection = () => {
	const form = useRef();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [userName, setUserName] = useState("");
	const [error, setError] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSending(true);

		emailjs
			.sendForm(
				"service_xw4kiva",
				"template_6bqvdtl",
				form.current,
				"m5SDTHBwRZSloZEfo"
			)
			.then(
				() => {
					setIsSending(false);
					setIsSubmitted(true);
					setUserName(form.current.user_name.value);
					setError(null);
				},
				(error) => {
					setIsSending(false);
					setError("Failed to send the message. Please try again.");
				}
			);
	};

	const handleWriteAgain = () => {
		setIsSubmitted(false);
		form.current.reset();
		setUserName("");
		setError(null);
	};

	return (
		<div className="contact-us-section">
			{!isSubmitted ? (
				<form ref={form} onSubmit={sendEmail} className="contact-form fade-in">
					<h2>Contact Us</h2>
					<div>
						<label>Name</label>
						<input
							type="text"
							name="user_name"
							required
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<div>
						{" "}
						<label>Email</label>
						<input type="email" name="user_email" required />
					</div>
					<div>
						{" "}
						<label>Message</label>
						<textarea name="message" required />
					</div>
					<div>
						<input
							type="submit"
							value={isSending ? "Sending..." : "Send"}
							className="contact-button"
							disabled={isSending}
						/>
					</div>

					{error && <p className="error-message">{error}</p>}
				</form>
			) : (
				<div className="thank-you-message fade-in">
					<h2>Thank you for reaching out, {userName}!</h2>
					<p>We will get back to you at the earliest.</p>
					<button onClick={handleWriteAgain} className="contact-button">
						Send Another Message
					</button>
				</div>
			)}
		</div>
	);
};

export default ContactUsSection;

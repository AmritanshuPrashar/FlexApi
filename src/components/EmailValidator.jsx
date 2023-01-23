import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "../Menu";

const EmailValidator = () => {
	const [email, setEmail] = useState("");
	const [valid, setValid] = useState(false);


	const options = {
		method: "GET",
		url: "https://email-validator18.p.rapidapi.com/email/validate",
		params: { email: `${email}` },
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
			"X-RapidAPI-Host": "email-validator18.p.rapidapi.com",
		},
	};
	useEffect(() => {
		axios
			.request(options)
            .then(function (response) {
                if (response.data.success == 'good')
                    setValid(1)
                else
                    setValid(0)
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	});

	return (
		<div>
			
		<Menu />
			<div>
				<input
					type="text"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
                <br />
                
               

				Provided Email : {email}
				<br />
				Validity : {valid ? <h2>True</h2> : <h2>False</h2>}
			</div>
		</div>
	);
};

export default EmailValidator;

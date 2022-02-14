import React, { useState } from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
const Home = () => {
	const [Color, setColor] = useState();
	return (
		<div className="lightBox align-middle">
			<div
				className={
					`lightRed` + (Color === "BrightRed" ? " BrightRed" : " ")
				}
				onClick={() => {
					setColor("BrightRed");
				}}></div>
			<div
				className={
					`lightOrange` +
					(Color === "BrightOrange" ? " BrightOrange" : " ")
				}
				onClick={() => {
					setColor("BrightOrange");
				}}></div>
			<div
				className={
					`lightGreen` +
					(Color === "BrightGreen" ? " BrightGreen" : " ")
				}
				onClick={() => {
					setColor("BrightGreen");
				}}></div>
		</div>
	);
};

export default Home;

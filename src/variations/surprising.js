import {colors, levelColors, makeTheme} from "../mixins.js";

const primaryPurple = "#D2624E";
const purple = makeTheme(
	"surprising-eggplant",
	Object.assign(
		{
			primary: primaryPurple,
			primaryalt: "#4E251D",
			uiborder: "#0F0B14",
			uibackground: "#1a1424",
			uibackgroundalt: "#16111F",
			default: "#FFFFFF" + "90",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#695091",
		},
		colors,
		levelColors,
		{
			yellow: primaryPurple,
			salmon: "#D2CBD6",
			orange: "#775BA3",
			blue: "#00B3BD",
			green: "#52AB62",
			turquoize: primaryPurple,
			purple: "#CC9B52",
			red: "#C13838",
			warning: "#c96c20",
			info: "#00B3BD",
			success: "#52AB62",
			danger: "#E35535",
		},
	),
);

const primaryBlue = "#D2624E";
const blue = makeTheme(
	"surprising-blueberry",
	Object.assign(
		{
			primary: primaryBlue,
			primaryalt: "#4E251D",
			uiborder: "#0F0B14",
			uibackground: "#121B2B",
			uibackgroundalt: "#0F1624",
			default: "#FFFFFF" + "90",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#3e668c",
		},
		colors,
		levelColors,
		{
			yellow: primaryBlue,
			salmon: "#CBCED6",
			orange: "#00FF00",
			blue: "#00B3BD",
			turquoize: primaryBlue,
			purple: "#CC9B52",
			red: "00FF00",
			warning: "#c96c20",
			info: "#00B3BD",
			danger: "#E35535",
		},
	),
);

export default {purple, blue};
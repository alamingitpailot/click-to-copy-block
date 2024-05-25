

import { getBoxValue } from './utils/functions';

import { getBorderCSS, getTypoCSS, getColorsCSS } from '../../Components/utils/getCSS';
const Style = ({ attributes, id }) => {

	const { labelColor, labelTypo, inputTypo, inputColors, inputPadding, inputBorder, btnTypo, btnColors, btnBorder, btnPadding } = attributes;

	const parentElement = `#${id} .form`;
	const parentElemenDefault = `#${id} .default`;
	const parentElementForm3 = `#${id} .form3`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		 
		${getTypoCSS('', inputTypo)?.googleFontLink}
		${getTypoCSS('', labelTypo)?.googleFontLink}
		${getTypoCSS('', btnTypo)?.googleFontLink}
		${getTypoCSS(`${parentElement} .inputForm .text`, inputTypo)?.styles}
		${getTypoCSS(`${parentElement} .inputForm .label`, labelTypo)?.styles}
		${getTypoCSS(`${parentElement} .inputForm .subBtn .btnText `, btnTypo)?.styles}

		${parentElement} .inputForm .label {
			color:${labelColor};
		}

		${parentElement} .copyText {
			${getColorsCSS(inputColors)};
		}

		${parentElement} .copyTextForm3 {
			${getColorsCSS(inputColors)};
		}

		${parentElement} .inputForm .text {
			padding:${getBoxValue(inputPadding)};
		}

		${parentElement} .inputForm .copyText button {
			padding:${getBoxValue(btnPadding)};
			${getBorderCSS(btnBorder)}
		}

		${parentElemenDefault} .inputForm .copyText.active .subBtn::before {
			${getColorsCSS(btnColors)}
		}

		${parentElemenDefault} .inputForm .copyText.active .subBtn::after {
			${getColorsCSS(btnColors)}
		}

		${parentElement} .inputForm .subBtn{
			${getColorsCSS(btnColors)};
			padding:${getBoxValue(btnPadding)};
		}

		${parentElementForm3} .inputForm .subBtn {
			${getBorderCSS(btnBorder)};
		}

		${parentElement} .inputForm .copyText {
			padding:${getBoxValue(inputPadding)};
			${getBorderCSS(inputBorder)};
		}

		${parentElement} .inputForm .copyTextForm3 {
			padding:${getBoxValue(inputPadding)};
			${getBorderCSS(inputBorder)};
		}

		${parentElementForm3} .inputForm3 .message {
			${getColorsCSS(btnColors)};
		}

		${parentElementForm3} .inputForm3 .message::after {
			border-left: 20px solid ${btnColors?.bg};
		}

		`.replace(/\s+/g, ' ')
	}} />;
}
export default Style;
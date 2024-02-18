
import { useState, useRef } from 'react';
import Default from './Components/Default';
import Form1 from './Components/Form1';
import Form2 from './Components/Form2';
import Form3 from './Components/Form3';


const Forms = ({ attributes, isBackend, labelEl }) => {
	const { forms } = attributes;

	const divRef = useRef(null);
	const [copied, setCopied] = useState(false);

	function handleCopy() {
		const text = divRef.current.innerText;
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}


	return <div className={`ctcClickToCopy form ${forms}`}>

		{'default' === forms && <Default attributes={attributes} isBackend={isBackend} labelEl={labelEl} divRef={divRef} handleCopy={handleCopy} copied={copied}></Default>}

		{'form1' === forms && <Form1 forms={forms} attributes={attributes} labelEl={labelEl} divRef={divRef} handleCopy={handleCopy} copied={copied} />}

		{'form2' === forms && <Form2 forms={forms} attributes={attributes} labelEl={labelEl} divRef={divRef} handleCopy={handleCopy} copied={copied} />}

		{'form3' === forms && <Form3 forms={forms} attributes={attributes} labelEl={labelEl} divRef={divRef} handleCopy={handleCopy} copied={copied} />}

	</div >
}
export default Forms;
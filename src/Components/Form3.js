

import Button from './Elements/Button';
import Email from './Elements/Email';

const Form3 = ({ forms, attributes, labelEl, divRef, handleCopy, copied }) => {
    const { elements } = attributes;
    const { label } = elements;
    return <div className='inputForm inputForm3'>
        {label && labelEl}

        <div className={`copyTextForm3 ${copied && 'active'}`}>
            <Email attributes={attributes} divRef={divRef} forms={forms} copied={copied} />
        </div>
        <Button attributes={attributes} handleCopy={handleCopy} />
        {copied && <div className='message'>Copied!</div>}

    </div>
}
export default Form3;
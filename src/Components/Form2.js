import Button from './Elements/Button';
import Email from './Elements/Email';


const Form2 = ({ forms, attributes, labelEl, divRef, handleCopy, copied }) => {
    const { elements } = attributes;
    const { label } = elements;

    return <div className='inputForm'>

        {label && labelEl}

        <div className={`copyText ${copied && 'active'}`}>
            <Email attributes={attributes} divRef={divRef} forms={forms} copied={copied} />
            <Button attributes={attributes} handleCopy={handleCopy} />
        </div>

        {copied && <div className='message'>Copied!</div>}

    </div>
}
export default Form2;
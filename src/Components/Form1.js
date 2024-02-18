
import Email from './Elements/Email';
import Button from './Elements/Button';


const Form1 = ({ forms, attributes, labelEl, divRef, handleCopy, copied }) => {
    const { elements } = attributes;
    const { label } = elements;
    return <>
        <div className='inputForm'>
            {label && labelEl}

            <div className={`copyText ${copied && 'active'}`}>
                <Button attributes={attributes} handleCopy={handleCopy} />
                <Email attributes={attributes} divRef={divRef} forms={forms} copied={copied} />
            </div>
        </div>
    </>
}
export default Form1;
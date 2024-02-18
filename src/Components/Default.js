

import Email from './Elements/Email';
import Button from './Elements/Button';

const Default = ({ attributes, setAttributes, isBackend, labelEl, divRef, handleCopy, copied }) => {
    const { elements } = attributes;
    const { label } = elements;

    return <>
        <div className='inputForm'>
            {label && labelEl}

            <div className={`copyText ${copied && 'active'}`}>
                <Email divRef={divRef} attributes={attributes} setAttributes={setAttributes} isBackend={isBackend} />

                <Button attributes={attributes} handleCopy={handleCopy} />
            </div>

        </div>
    </>
}
export default Default;


const Email = ({ attributes, divRef, forms, copied }) => {

    const { input } = attributes;

    return <div className='text' ref={divRef}>
        {(forms === "form1" && copied) ? "Copied" : input?.offerContent}
    </div>

}
export default Email;
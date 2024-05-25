
import { createRoot } from 'react-dom/client';

import Style from './Style';
import Forms from './Forms';

// Click to Copy
document.addEventListener('DOMContentLoaded', () => {
    const clickToCopyEle = document.querySelectorAll('.wp-block-ctcb-click-to-copy');
    clickToCopyEle.forEach(clickToCopyEl => {
        const attributes = JSON.parse(clickToCopyEl.dataset.attributes);
        const { input } = attributes;

        const LabelEl = <div className='label' dangerouslySetInnerHTML={{ __html: input?.label }} />

        createRoot(clickToCopyEl).render(<>
            <Style attributes={attributes} id={clickToCopyEl.id} />
            <Forms attributes={attributes} labelEl={LabelEl} />
        </>);

        clickToCopyEl?.removeAttribute('data-attributes');
    });
});
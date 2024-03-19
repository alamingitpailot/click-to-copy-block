
import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Style';
import Forms from './Forms';

// Click to Copy
document.addEventListener('DOMContentLoaded', () => {
	const clickToCopyEle = document.querySelectorAll('.wp-block-ctcb-click-to-copy');
	clickToCopyEle.forEach(clickToCopy => {
		const attributes = JSON.parse(clickToCopy.dataset.attributes);
		const { input } = attributes;

		const LabelEl = <div className='label' dangerouslySetInnerHTML={{ __html: input?.label }} />

		createRoot(clickToCopy).render(<>
			<Style attributes={attributes} clientId={attributes.cId} />
			<Forms attributes={attributes} labelEl={LabelEl} />
		</>);

		clickToCopy?.removeAttribute('data-attributes');
	});
});
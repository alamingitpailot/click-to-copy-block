import { useEffect } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';


import './editor.scss';

import Settings from './Settings';
import Forms from './Forms';
import { tabController } from './utils/functions';
import Style from './Style';

const Edit = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { input } = attributes;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	useEffect(() => tabController(), [isSelected]);

	const labelEl = <RichText tagName="div" className='label' value={input?.label} onChange={val => setAttributes({ input: { ...input, label: val } })} placeholder='Title Here' inlineToolbar />

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

		<div {...useBlockProps()} id={`ctcbClickToCopy-${clientId}`}>
			<Style attributes={attributes} clientId={clientId} id={`ctcbClickToCopy-${clientId}`} />
			<Forms attributes={attributes} setAttributes={setAttributes} labelEl={labelEl} />
		</div>
	</>;
}
export default Edit;


import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { produce } from 'immer';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TabPanel, ToggleControl, SelectControl, __experimentalBoxControl as BoxControl, __experimentalInputControl as InputControl } from '@wordpress/components';



// Settings Components
import { BColor, Typography, BorderControl, ColorsControl, HelpPanel } from '../../Components';

import { tabController, checkForm } from './utils/functions';
import options from './utils/options';
import icons from './utils/icons';
const { generalStyleTabs, pxUnit, emUnit } = options;

const Settings = ({ attributes, setAttributes }) => {
	const { input, elements, forms, labelTypo, labelColor, inputTypo, inputColors, inputPadding, inputBorder, btnTypo, btnColors, btnBorder, btnPadding, btnIcon } = attributes;

	// Object attr update
	const updateObject = (attr, key, val) => {
		const newAttr = { ...attributes[attr] };
		newAttr[key] = val;
		setAttributes({ [attr]: newAttr })
	}

	useEffect(() => {
		icons?.iconCopy(btnIcon.size);
		icons?.iconCopy(btnIcon.color);
	}, [btnIcon]);

	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={() => tabController()}>{tab => <>
				{'general' === tab.name && <>

					<HelpPanel slug="click-to-copy" docsLink="https://bplugins.com/docs/click-to-copy" />
					<PanelBody className="bPlPanelBody ctcBPanelBody" title={__('Input', 'clipboard')} initialOpen={false} >

						<InputControl className='mt10' label={__('Content', 'clipboard')} labelPosition='top' value={input?.offerContent} onChange={(val) => updateObject('input', 'offerContent', val)} />

					</PanelBody>

					<PanelBody className="bPlPanelBody" title={__('Elements', 'clipboard')} initialOpen={false} >

						<ToggleControl className='mt10' label={__('Label', 'clipboard')} checked={elements?.label} onChange={(val) => { updateObject('elements', 'label', val) }} />

						<ToggleControl className='mt10' label={__('Icon', 'clipboard')} checked={elements?.icon} onChange={(val) => { updateObject('elements', 'icon', val) }} />

						<ToggleControl className='mt10' label={__('Text', 'clipboard')} checked={elements?.text} onChange={(val) => { updateObject('elements', 'text', val) }} />
					</PanelBody>

					<PanelBody className='bPlPanelBody' title={__('Select Forms', 'clipboard')} initialOpen={false}>
						<SelectControl label={__('Select Form', 'clipboard')} labelPosition="side" value={forms} options={options?.forms} onChange={(val) => { setAttributes({ forms: val, ...checkForm(val) }) }} />

					</PanelBody>
				</>}


				{'style' === tab.name && <>

					{elements?.label &&
						<PanelBody className='bPlPanelBody' title={__('Label', 'clipboard')} initialOpen={false}>

							<Typography className='mb10' label={__('Typography', 'clipboard')} value={labelTypo} onChange={(val) => { setAttributes({ labelTypo: val }); }} produce={produce} />

							<BColor className='' label={__('Color', 'clipboard')} value={labelColor} onChange={(val) => setAttributes({ labelColor: val })} />

						</PanelBody>
					}

					<PanelBody className='bPlPanelBody' title={__('Input', 'clipboard')} initialOpen={false}>
						<Typography className='mb10' label={__('Typography', 'clipboard')} value={inputTypo} onChange={(val) => { setAttributes({ inputTypo: val }); }} produce={produce} />

						<ColorsControl className='mb20' label={__('Colors', 'clipboard')} value={inputColors} onChange={(val) => { setAttributes({ inputColors: val }) }} />

						<BoxControl label={__('Padding', 'clipboard')} values={inputPadding} onChange={val => setAttributes({ inputPadding: val })} resetValues={{ top: "10px", right: "10px", bottom: "10px", left: "10px" }} units={[pxUnit(3), emUnit(2)]} />

						<BorderControl className='mt10' label={__('Border', 'clipboard')} value={inputBorder} onChange={(val) => { setAttributes({ inputBorder: val }) }} />
					</PanelBody>

					<PanelBody className='bPlPanelBody' title={__('Button', 'clipboard')} initialOpen={false}>

						<Typography className='mb10' label={__('Typography', 'clipboard')} value={btnTypo} onChange={(val) => { setAttributes({ btnTypo: val, btnIcon: { ...btnIcon, size: btnTypo?.fontSize?.desktop } }); }} produce={produce} />

						<ColorsControl className='mb20' label={__('Colors', 'clipboard')} value={btnColors} onChange={(val) => { setAttributes({ btnColors: val, btnIcon: { ...btnIcon, color: btnColors?.color } }) }} />

						<BorderControl className='mt10 mb10' label={__('Border', 'clipboard')} value={btnBorder} onChange={(val) => { setAttributes({ btnBorder: val }) }} />

						<BoxControl label={__('Padding', 'clipboard')} values={btnPadding} onChange={val => setAttributes({ btnPadding: val })} resetValues={{ top: "10px", right: "10px", bottom: "10px", left: "10px" }} units={[pxUnit(3), emUnit(2)]} />

					</PanelBody>

					{/* {elements?.icon &&
						<PanelBody className='bPlPanelBody' title={__('Button Icon', 'clipboard')} initialOpen={false}>

							<RangeControl value={btnIcon.size} onChange={(value) => { updateObject('btnIcon', 'size', value) }} min={1} max={100} />

							<BColor className='mt20' label={__('Color', 'github')} value={btnIcon.color} onChange={val => setAttributes({ btnIcon: { ...btnIcon, color: val } })} />

						</PanelBody>
					} */}

				</>}
			</>}</TabPanel>
		</InspectorControls>

	</>;
};
export default Settings;
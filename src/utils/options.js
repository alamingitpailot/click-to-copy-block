import { __ } from '@wordpress/i18n';

import icons from './icons';

const options = {

	forms: [
		{ label: __('Default', 'mail-collections'), value: 'default' },
		{ label: __('Form-1', 'mail-collections'), value: 'form1' },
		{ label: __('Form-2', 'mail-collections'), value: 'form2' },
		{ label: __('Form-3', 'mail-collections'), value: 'form3' }
	],

	layouts: [
		{ label: __('Vertical', 'block-directory'), value: 'vertical', icon: icons.verticalLine },
		{ label: __('Horizontal', 'block-directory'), value: 'horizontal', icon: icons.horizontalLine }
	],

	generalStyleTabs: [
		{ name: 'general', title: __('General', 'block-directory') },
		{ name: 'style', title: __('Style', 'block-directory') }
	],

	pxUnit: (def = 0) => ({ value: 'px', label: 'px', default: def }),
	perUnit: (def = 0) => ({ value: '%', label: '%', default: def }),
	emUnit: (def = 0) => ({ value: 'em', label: 'em', default: def }),
	remUnit: (def = 0) => ({ value: 'rem', label: 'rem', default: def }),
	vwUnit: (def = 0) => ({ value: 'vw', label: 'vw', default: def }),
	vhUnit: (def = 0) => ({ value: 'vh', label: 'vh', default: def })
}
export default options;
import { registerBlockType } from '@wordpress/blocks';

import metadata from '../block.json';
import Edit from './Edit';
import './editor.scss';
import icons from './utils/icons';

registerBlockType(metadata, {
	icon: icons.copy,

	// Build in Functions
	edit: Edit,

	save: () => null
});
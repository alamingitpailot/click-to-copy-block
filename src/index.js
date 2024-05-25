import { registerBlockType } from '@wordpress/blocks';

import Edit from './Edit';
import metadata from './block.json';
import './style.scss';
import icons from './utils/icons';

registerBlockType(metadata.name, {
	icon: icons.copy,

	edit: Edit,
});

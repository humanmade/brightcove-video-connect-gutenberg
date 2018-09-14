/**
 * BLOCK: block
 *
 * Registers a block to handle the Brightcove Video Connect shortcode in Gutenberg.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register a Gutenberg Block.
 *
 * Registers a new block to provide UI for the [bc_video] shortcode in Gutenberg.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'hm/brightcove-video', {

	title: __( 'Brightcove Video', 'brightcove-gutenberg' ),

	icon: 'format-video',

	category: 'widgets',

	keywords: [
		__( 'Brightcove', 'brightcove-gutenberg' ),
		__( 'video', 'brightcove-gutenberg' ),
	],

	attributes: {
		'player_id': {
			type: 'string',
		},
		'account_id': {
			type: 'string',
		},
		'video_id': {
			type: 'string',
		},
		'autoplay': {
			type: 'string',
		},
		'embed': {
			type: 'string',
		},
		'padding_top': {
			type: 'string',
		},
		'min_width': {
			type: 'string',
		},
		'max_width': {
			type: 'string',
		},
		'height': {
			type: 'string',
		},
		'width': {
			type: 'string',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit( { attributes, setAttributes, className } ) {

		const {
			player_id,
			account_id,
			video_id,
			autoplay,
			embed,
			padding_top,
			min_width,
			max_width,
			height,
			width,
		} = attributes;

		//  Update attributes when the WPBC "insert:shortcode" event is fired.
		wpbc.broadcast.on( 'insert:shortcode', () => {
			const { shortcode } = wp.shortcode.next( 'bc_video', wpbc.shortcode );
			console.log( shortcode );
			setAttributes( shortcode.attrs.named );
		} );

		return (
			<div className={ className }>
				{ ! video_id && (
					<div class="components-placeholder editor-brightcove-selector">
						<button
							className="editor-brightcove-selector__button"
							onClick={ wpbc.triggerModal }
						>{ __( 'Select a video' ) }</button>
					</div>
				) }
				{ video_id && (
					<div>
					Video ID: { video_id }
					</div>
				) }
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( { attributes, className } ) {

		if ( ! attributes.video_id ) {
			return;
		}

		const shortcodeProps = {
			tag: 'bc_video',
			attrs: attributes,
		};

		return (
			<div className={ className }>
				{ wp.shortcode.string( shortcodeProps ) }
			</div>
		);
	},
} );

/**
 * BLOCK: block
 *
 * Registers a block to handle the Brightcove Video Connect shortcode in Gutenberg.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { ServerSideRender } = wp.components;

const getShortcodeString = attrs => {

	if ( ! attrs.video_id ) {
		return;
	}

	// Canonicalize order of attributes to ensure that saved content matches previous value.
	const shortcodeAtts = Object.entries( attrs )
		.sort( ( a, b ) => a[0].localeCompare( b[0] ) )
		.reduce( ( atts, [ k, v ] ) => {
			atts[ k ] = v;
			return atts;
		}, {} );

	return wp.shortcode.string( { tag: 'bc_video', attrs: shortcodeAtts } );
}

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
	edit( { attributes, setAttributes, className, isSelected } ) {

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


		return (
			<div className={ className + ( video_id ? ' has-video-preview' : '' ) }>
				<div class="components-placeholder editor-brightcove-selector">
					{ video_id && (
						<iframe
							src={ `//players.brightcove.net/${ account_id}/${ player_id }_default/index.html?videoId=${ video_id }` }
							style= { {
								width: '100%',
								height: '400px',
							} }
						/>
					) }
					<button
						className="editor-brightcove-selector__button"
						onClick={ () => {
							wpbc.shortcode = getShortcodeString( attributes );
							wpbc.triggerModal();

							/*
							 * Update shortcode attributes when the WPBC "insert:shortcode" event
							 * is fired, clearing any previously attached insert handlers first.
							 */
							wpbc.broadcast.off( 'insert:shortcode' );
							wpbc.broadcast.once( 'insert:shortcode',
								() => {
									const { shortcode } = wp.shortcode.next( 'bc_video', wpbc.shortcode );
									setAttributes( shortcode.attrs.named );
								}
							);
						} }
					>{ __( 'Select a video' ) }</button>
				</div>
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
		return (
			<div className={ className }>
				{ getShortcodeString( attributes ) }
			</div>
		);
	},
} );

<?php

namespace HM\Brightcove\Gutenberg;

function bootstrap() {
    add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\block_assets' );
    add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\block_editor_assets' );
	add_action( 'init', __NAMESPACE__ . '\\register_block_render_callback' );
}


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 */
function block_assets() {
	wp_enqueue_style(
		'block-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		[ 'wp-blocks' ]
	);
}

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 */
function block_editor_assets() {

	wp_enqueue_script(
		'block-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
		true
	);


	wp_enqueue_style(
		'block-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		[ 'wp-edit-blocks' ]
	);
}

/**
 * Register the block server-side, to provide a callback to render a preview.
 *
 * Registers a block render_callback for this block. Because this
 * render_callback is only needed in the editor (the frontend markup is
 * handled using core's shortcode handler from the shortcode text stored in
 * the block content) this "callback" just checks for a sprecific attribute
 * which is only defined here, and passes through the content untouched if that
 * attribute isn't present.
 *
 */
function register_block_render_callback() {
	register_block_type( 'hm/brightcove-video', [
		'render_callback' => __NAMESPACE__ . '\\render_callback',
		'attributes' => [
			'text' => [ 'type' => 'string' ],
		]
	] );
}

/**
 * Render the video player from the shortcode.
 *
 * The "text" attribute is only used in the ServerSideRender request from the
 * editor, so if that is present, this is an editor preview request. Otherwise,
 * just pass through the already rendered content.
 *
 * @param array $attributes Block attributes.
 * @param string $content Block inner content.
 * @return string Rendered markup for block.
 */
function render_callback( $attributes, $content ) {
	if ( ! isset( $attributes['text'] ) ) {
		return $content;
	}

	return do_shortcode( $attributes['text'] );
}

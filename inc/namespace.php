<?php

namespace HM\Brightcove\Gutenberg;

function bootstrap() {
    add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\block_assets' );
    add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\block_editor_assets' );
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



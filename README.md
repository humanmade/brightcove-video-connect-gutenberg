<table width="100%">
	<tr>
		<td align="left" width="70">
			<strong>Brightcove Video Connect Gutenberg block</strong><br />
			Provides a block interface in Gutenberg for the shortcode and interface from the <a href="https://github.com/10up/brightcove-video-connect">Brightcove Video Connect</a> plugin.
		</td>
		<td align="right" width="20%">
			<a href="https://travis-ci.org/humanmade/tachyon-plugin">
				<img src="https://travis-ci.org/humanmade/brightcove-video-connect-gutenberg.svg?branch=master" alt="Build status">
			</a>
			<a href="http://codecov.io/github/humanmade/brightcove-video-connect-gutenberg?branch=master">
				<img src="http://codecov.io/github/humanmade/brightcove-video-connect-gutenberg/coverage.svg?branch=master" alt="Coverage via codecov.io" />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			A <strong><a href="https://hmn.md/">Human Made</a></strong> project. Initially developed by @goldenapples.
		</td>
		<td align="center">
			<img src="https://hmn.md/content/themes/hmnmd/assets/images/hm-logo.svg" width="100" />
		</td>
	</tr>
</table>

This plugin provides a Gutenberg interface for Brightcove video embeds. The modal interface and the shortcode output handling comes directly from Brightcove Video Embeds plugin.

Built using [create-guten-block](https://github.com/ahmadawais/create-guten-block).


## Installation

This repo doesn't currently include the dist files. To build the dist files, clone the repository, run `npm install` and then `npm run build`.


### TODO:

**Add support for playlists.** Currently this interface only supports the `[bc_video]` shortcode. We should build out support for the playlist shortcode as well.

**Better, more Gutenberg-y interface.** It would be nice to allow setting options through a panel in inspector controls, rather than having to open the modal to make those changes.

**Support more options in preview iframe.** If dimensions are set on the shortcode, we could try to respect those in the editor preview as well.

**Release with built files.** It'd make it easier to include as a submodule if there was a tag which contained all the dist files. Also, release to .org plugin repository.




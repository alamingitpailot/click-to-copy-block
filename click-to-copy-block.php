<?php
/**
 * Plugin Name: Click to Copy
 * Description: The Click To Copy Block plugin offers a seamless Gutenberg block for one-click content copying.
 * Version: 1.0.0
 * Author: Al Amin
 * Author URI:https://profiles.wordpress.org/alamincmt
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: clipboard
 */

// ABS PATH
if (!defined('ABSPATH')) {exit;}

// Constant
define('CTCB_PLUGIN_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('CTCB_DIR', plugin_dir_url(__FILE__));
 
// Block Directory
class CTCBClickToCopy
{
    public function __construct()
    {
        add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
        add_action('init', [$this, 'onInit']);
    }

    public function enqueueBlockAssets()
    {
        wp_set_script_translations('ctcb-click-to-copy-view-script', 'clipboard', plugin_dir_path(__FILE__) . 'languages'); // Translate
        wp_set_script_translations('ctcb-click-to-copy-editor-script', 'clipboard', plugin_dir_path(__FILE__) . 'languages'); // Translate
    }

    public function onInit() {
        register_block_type( __DIR__ . '/build' );
    }

}
new CTCBClickToCopy();
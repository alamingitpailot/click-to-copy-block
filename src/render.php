<?php
	$clientId = wp_unique_id( 'prefix-' );
?>
<div <?php echo get_block_wrapper_attributes(); ?> id='ctcbClickToCopy-<?php echo esc_attr( $clientId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

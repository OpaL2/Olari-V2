<?php 
/**
*
* @package olariv2
*/

//Creates pretty search links for theme

function olariv2_add_rewrite() {
  add_rewrite_rule('^hae/(.+)/?$', 'index.php?s=$matches[1]', 'top');
}

add_action('init', 'olariv2_add_rewrite');

function olariv2_change_search_url_rewrite() {
  if ( is_search() && ! empty( $_GET['s'] ) ) {
    wp_redirect( home_url( "/hae/" ) . urlencode( get_query_var( 's' ) ) );
    exit();
  } 
}
add_action( 'template_redirect', 'olariv2_change_search_url_rewrite' );

add_action( 'after_switch_theme', 'flush_rewrite_rules' );

 ?>


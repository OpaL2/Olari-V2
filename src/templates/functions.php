<?php

if ( ! function_exists( 'olariv2_setup' ) ) :

function olariv2_setup() {

  load_theme_textdomain( 'olariv2', get_template_directory() . '/languages' );

  add_theme_support( 'title-tag' );
  add_theme_support( 'html5', array('search_form'));

  add_theme_support( 'post-thumbnails' );
  set_post_thumbnail_size( 50, 50, array( 'center', 'center')  );
  add_image_size( 'default-thumb', 999, 9999, false);

  add_theme_support( 'automatic-feed-links' );

  add_post_type_support('page', array('excerpt'));

  add_theme_support( 'post-formats', array(
    'status',
  ) );

  register_nav_menus(array(
    'primary' => esc_html__('Primary', 'olariv2')
  ));
}
endif;
add_action( 'after_setup_theme', 'olariv2_setup' );

function olariv2_excerpt_more($more) {
       global $post;
  return ' <a class="moretag" href="'. get_permalink($post->ID) . '"> <i class="fas fa-angle-double-right"></i></a>';
}
add_filter('excerpt_more', 'olariv2_excerpt_more');


add_action( 'init', 'olariv2_update_ai1ec_event', 99 );

function olariv2_update_ai1ec_event() {
    global $wp_post_types;

    if ( post_type_exists( 'ai1ec_event' ) ) {

        // exclude from search results
        $wp_post_types['ai1ec_event']->exclude_from_search = true;
    }
}

function olariv2_search_filter( $query ) {
  if ( 'page' == get_option('show_on_front') ) {
    $frontpage_id = (int)get_option( 'page_on_front' );
    $blog_id = (int)get_option( 'page_for_posts' );

    if( ! $query->is_admin && $query->is_search ) {
      $query->set( 'post__not_in', [$frontpage_id, $blog_id]);
    }
  }
}

add_action( 'pre_get_posts', 'olariv2_search_filter');


function olariv2_wigdets_init() {
  register_sidebar(
    array(
      'name' => __('Toolbar items', 'olariv2'),
      'id' => 'primary',
      'description' => __('Widget area for toolbar items', 'olariv2'),
      'before_widget' => '<div id="%1$s" class="card mt-3 border-0"><div class="card-body">',
      'after_widget' => '</div></div>',
      'before_title' => '<h3 class="card-title" >',
      'after_title' => '</h3>' 
  ));
}
add_action('widgets_init', 'olariv2_wigdets_init');

require_once(get_template_directory() . '/includes/customizer.php');
require_once(get_template_directory() . '/includes/rest-api.php');
require_once(get_template_directory() . '/includes/permalinks.php');

/*
This function is machine generated, please do not modify
*/
function olariv2_styles() {

  //wp_deregister_style('ai1ec_style');
  ?>
  <!-- inject:css -->
  <!-- endinject -->
  <?php
}

/*
This function is machine generated, please do not modify
*/
function olariv2_scripts() {
  ?>
  <!-- inject:js -->
  <!-- endinject -->
<?php
}

add_action( 'wp_enqueue_scripts', 'olariv2_styles');
add_action( 'wp_enqueue_scripts', 'olariv2_scripts');

?>
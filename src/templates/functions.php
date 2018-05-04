<?php

if ( ! function_exists( 'olariv2_setup' ) ) :

function olariv2_setup() {

  load_theme_textdomain( 'olariv2', get_template_directory() . '/languages' );

  add_theme_support( 'title-tag' );
  add_theme_support( 'html5', array('search_form'));

  add_theme_support( 'post-thumbnails' );
  set_post_thumbnail_size( 50, 50, array( 'center', 'center')  );
  add_image_size( 'default-thumb', 999, 9999, false);

  add_post_type_support('page', array('excerpt'));

  register_nav_menus(array(
    'primary' => esc_html__('Primary', 'olariv2'),
    'hiligths_mobile' => esc_html__('Hilighted on mobile', 'olariv2'),
    'hiligths_desktop' => esc_html__('Hilighted on desktop', 'olariv2')
  ));
}
endif;
add_action( 'after_setup_theme', 'olariv2_setup' );

function olariv2_excerpt_more($more) {
       global $post;
  return ' <a class="moretag" href="'. get_permalink($post->ID) . '"> <i class="fas fa-angle-double-right"></i></a>';
}
add_filter('excerpt_more', 'olariv2_excerpt_more');


function olariv2_wigdets_init() {
  register_sidebar(
    array(
      'name' => __('Toolbar items', 'olariv2'),
      'id' => 'primary',
      'description' => __('Widget area for toolbar items', 'olariv2'),
      'before_widget' => '<div id="%1$s" class="card mt-3"><div class="card-body">',
      'after_widget' => '</div></div>',
      'before_title' => '<h3 class="card-title" >',
      'after_title' => '</h3>' 
  ));
}
add_action('widgets_init', 'olariv2_wigdets_init');

require_once(get_template_directory() . '/includes/customizer.php');
require_once(get_template_directory() . '/includes/rest-api.php');

/*
This function is machine generated, please do not modify
*/
function olariv2_styles() {
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
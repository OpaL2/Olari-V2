<?php

if ( ! function_exists( 'olariv2_setup' ) ) :

function olariv2_setup() {

  load_theme_textdomain( 'olariv2', get_template_directory() . '/languages' );

  add_theme_support( 'title-tag' );

  register_nav_menus(array(
    'primary' => esc_html__('Primary', 'olariv2'),
    'hiligths' => esc_html__('Hilighted', 'olariv2')
  ));
}
endif;
add_action( 'after_setup_theme', 'olariv2_setup' );


function olariv2_wigdets_init() {
  register_sidebar(
    array(
      'name' => __('Toolbar items', 'olariv2'),
      'id' => 'primary',
      'description' => __('Widget area for toolbar items', 'olariv2'),
      'before_widget' => '<div id="%1$s" class="primary-widget">',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="primary-widget-title" >',
      'after_title' => '</h3>' 
  ));
}
add_action('widgets_init', 'olariv2_wigdets_init');

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

/*
Rest of the file is machine generated, please do not modify
*/
?>
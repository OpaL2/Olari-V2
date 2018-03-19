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
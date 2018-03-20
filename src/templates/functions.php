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
      'before_widget' => '<div id="%1$s" class="primary-widget m-toolbar-page">',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="primary-widget-title" >',
      'after_title' => '</h3>' 
  ));
}
add_action('widgets_init', 'olariv2_wigdets_init');

function olariv2_customize_register($wp_customize) {

  $wp_customize->add_panel('theme', array(
    'title' => __('Theme settings', 'olariv2'),
    'priority' => 10
  ));
  $wp_customize->add_section('front_page_branding', array(
    'title' => __('Front page branding', 'olariv2'),
    'description' => __('Settings for front page branding', 'olariv2'),
    'priority' => 160,
    'panel' => 'theme',
    'capability' => 'edit_theme_options'
  ));

  $wp_customize->add_setting('front_page_img', array(
    'default' => '',
    'section' => 'front_page_branding'
  ));

  $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'front_page_img', array(
    'label' => __('Front page branding image', 'olariv2'),
    'section' => 'front_page_branding',
    'mime_type' => 'image'
  )));
}
add_action('customize_register', 'olariv2_customize_register');

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
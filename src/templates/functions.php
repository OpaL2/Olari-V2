<?php

if ( ! function_exists( 'olariv2_setup' ) ) :

function olariv2_setup() {

  load_theme_textdomain( 'olariv2', get_template_directory() . '/languages' );

  add_theme_support( 'title-tag' );

  register_nav_menus(array(
    'primary' => esc_html__('Primary', 'olariv2'),
    'hiligths_mobile' => esc_html__('Hilighted on mobile', 'olariv2'),
    'hiligths_desktop' => esc_html__('Hilighted on desktop', 'olariv2')
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

function olariv2_customize_register($wp_customize) {

  $wp_customize->add_panel('olariv2_theme', array(
    'title' => __('Theme settings', 'olariv2'),
    'priority' => 10
  ));

  $wp_customize->add_section('olariv2_front_page_branding', array(
    'title' => __('Front page', 'olariv2'),
    'description' => __('Settings for front page', 'olariv2'),
    'priority' => 10,
    'panel' => 'olariv2_theme',
    'capability' => 'edit_theme_options'
  ));

  $wp_customize->add_setting('front_page_img', array(
    'default' => '',
    'section' => 'olariv2_front_page_branding'
  ));

  $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'front_page_img', array(
    'label' => __('Front page branding image', 'olariv2'),
    'section' => 'olariv2_front_page_branding',
    'mime_type' => 'image'
  )));

 $wp_customize->add_setting('front_page_post_category', array(
    'default' => '',
    'section' => 'olariv2_front_page_branding'
  ));

  $wp_customize->add_control('front_page_post_category', array(
    'label' => __('Front page post category', 'olariv2'),
    'description' => __('Controls which post category is used in front page', 'olariv2'),
    'type' => 'select',
    'section' => 'olariv2_front_page_branding',
    'choices' => array_reduce(get_terms(array('taxonomy' => 'category')),
      function ($carry,$term) {
        $carry[$term->term_id] = $term->name;
        return $carry;
      },
      array())
  ));

  $wp_customize->add_section('olariv2_toolbar_widgets', array(
    'title' => __('Toolbar widgets', 'olariv2'),
    'description' => __('Settings for widgets in toolbar items', 'olariv2'),
    'pirority' => 20,
    'panel' => 'olariv2_theme',
    'capability' => 'edit_theme_options'
  ));

  $wp_customize->add_setting('handout_widget_category', array(
    'default' => '',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_control('handout_widget_category', array(
    'label' => __('Handout Widget Post Category', 'olariv2'),
    'description' => __('Controls which post category is used in handout widget', 'olariv2'),
    'type' => 'select',
    'section' => 'olariv2_toolbar_widgets',
    'choices' => array_reduce(get_terms(array('taxonomy' => 'category')),
      function ($carry,$term) {
        $carry[$term->term_id] = $term->name;
        return $carry;
      },
      array())
  ));

  $wp_customize->add_setting('contact_info_widget_email', array(
    'default' => '',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_control('contact_info_widget_email', array(
    'label' => __('Contact widget email address:', 'olariv2'),
    'description' => __('Email address which is displayed in main contact widget', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_setting('contact_info_widget_telephone', array(
    'default' => '',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_control('contact_info_widget_telephone', array(
    'label' => __('Contact widget phone number:', 'olariv2'),
    'description' => __('Phone number which is displayed in main contact widget', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_setting('contact_info_widget_address', array(
    'default' => '',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_control('contact_info_widget_address', array(
    'label' => __('Contact widget address:', 'olariv2'),
    'description' => __('Address which is displayed in main contact widget', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_setting('contact_info_widget_maps_url', array(
    'default' => '',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_control('contact_info_widget_maps_url', array(
    'label' => __('Location services url:', 'olariv2'),
    'description' => __('Location services url which is used with main contact widget adress', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_toolbar_widgets'
  ));

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
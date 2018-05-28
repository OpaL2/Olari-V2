<?php

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

    $wp_customize->add_setting('contact_info_widget_contact_page', array(
    'default' => '',
    'section' => 'olariv2_toolbar_widgets'
  ));

  $wp_customize->add_control('contact_info_widget_contact_page', array(
    'label' => __('Contact page', 'olariv2'),
    'description' => __('Select page which displays contact listing', 'olariv2'),
    'type' => 'select',
    'section' => 'olariv2_toolbar_widgets',
    'choices' => array_reduce(get_pages(),
      function ($carry,$page) {
        $carry[$page->ID] = $page->post_title;
        return $carry;
      },
      array())
    ));

  $wp_customize->add_section('olariv2_social_media_widget', array(
    'title' => __('Social media links', 'olariv2'),
    'description' => __('Urls for links in social media', 'olariv2'),
    'priority' => 30,
    'panel' => 'olariv2_theme',
    'capability' => 'edit_theme_options'
  ));

  $wp_customize->add_setting('social_media_instagram', array(
    'default' => '',
    'section' => 'olariv2_social_media_widget'
  ));

  $wp_customize->add_control('social_media_instagram', array(
    'label' => __('Instagram account url', 'olariv2'),
    'description' =>__('', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_social_media_widget'
  ));

  $wp_customize->add_setting('social_media_facebook', array(
    'default' => '',
    'section' => 'olariv2_social_media_widget'
  ));

  $wp_customize->add_control('social_media_facebook', array(
    'label' => __('Facebook account url', 'olariv2'),
    'description' =>__('', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_social_media_widget'
  ));

    $wp_customize->add_setting('social_media_twitter', array(
    'default' => '',
    'section' => 'olariv2_social_media_widget'
  ));

  $wp_customize->add_control('social_media_twitter', array(
    'label' => __('Twitter account url', 'olariv2'),
    'description' =>__('', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_social_media_widget'
  ));

  $wp_customize->add_section('olariv2_calendar', array(
    'title' => __('Calendar settings', 'olariv2'),
    'description' => __('', 'olariv2'),
    'priority' => 40,
    'panel' => 'olariv2_theme',
    'capability' => 'edit_theme_options'
  ));

  $wp_customize->add_setting('calendar_ics_url', array(
    'default' => '',
    'section' => 'olariv2_calendar'
  ));

  $wp_customize->add_control('calendar_ics_url', array(
    'label' => __('Calendar ICS link for subscribe button', 'olariv2'),
    'description' => __('CalDav ICS URL', 'olariv2'),
    'type' => 'text',
    'section' => 'olariv2_calendar'
  ));

  $wp_customize->add_setting('calendar_page', array(
    'default' => '',
    'section' => 'olariv2_calendar'
  ));

  $wp_customize->add_control('calendar_page', array(
    'label' => __('Calendar page', 'olariv2'),
    'description' => __('Select page which is used as calendar display page', 'olariv2'),
    'type' => 'select',
    'section' => 'olariv2_calendar',
    'choices' => array_reduce(get_pages(),
      function ($carry,$page) {
        $carry[$page->ID] = $page->post_title;
        return $carry;
      },
      array())
    ));

}
add_action('customize_register', 'olariv2_customize_register');

?>
<?php

add_action('rest_api_init', function() {
  $namespace='olariv2/v1';
  register_rest_route($namespace, '/settings', array(
    'methods' => 'GET',
    'callback' => 'olariv2_rest_theme_settings'
  ));
});

function olariv2_rest_theme_settings($data) {
  return array(
    'siteName' => get_bloginfo('name'),
    'siteAddress' => home_url('/'),
    'socialMedia' => array(
        'facebookUrl' => get_theme_mod('social_media_facebook'),
        'twitterUrl' => get_theme_mod('social_media_twitter'),
        'instagramUrl' => get_theme_mod('social_media_instagram')
      ),
    'contactInfo' => array(
        'phone' => get_theme_mod('contact_info_widget_telephone'),
        'email' => get_theme_mod('contact_info_widget_email'),
        'address' => get_theme_mod('contact_info_widget_address'),
        'locationUrl' => get_theme_mod('contact_info_widget_maps_url'),
        'pageID' => get_theme_mod('contact_info_widget_contact_page')
      ),
    'infoCategoryID' => get_theme_mod('handout_widget_category'),
    'calendarPageID' => get_theme_mod('calendar_page'),
    'frontPage' => array(
        'postCategoryID' => get_theme_mod('front_page_post_category'),
        'brandingImg' => get_theme_mod('front_page_img')
      )
  );
}


?>
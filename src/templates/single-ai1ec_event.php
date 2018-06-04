<?php

global $post;
global $ai1ec_front_controller;

$registry = $ai1ec_front_controller->return_registry(null);
$ai1ec_search = $registry->get('model.search');
$event = $registry->get('model.event')->initialize_from_id($post->ID);
$UUID=$event->get('ical_uid');
$ai1ec_start=$event->get('start');

$page = get_post(get_theme_mod('calendar_page'));

$url = home_url( '/' . $page->post_name . $ai1ec_start->format('/#/Y/m/d/') . $UUID);

header('Location: ' . $url, true, 301);

?>

<?php

class olariv2_Calendar_And_Events extends WP_Widget {

  public function __construct() {
    parent::__construct( 'olariv2-calendar-and-events', 'Olari-v2 Calendar and events');
    add_action( 'widgets_init', function() { register_widget( 'olariv2_Calendar_And_Events' ); } );
  }

  public function widget( $args, $instance ) {

  }

  public function form( $instance ) {

    ?>


    <?php

  }

  public function update( $new_instance, $old_instance ) {
    $instance = array();

    $instance['calendar_url'] = (!empty($new_instance['calendar_url'])) ? esc_url($new_instance['calendar_url']) : '';
    $instance['event_category'] = (!empty($new_instance['event_category'])) ? esc_html(strip_tags($new_instance['event_category'])) : '';
  }
}

$olariv2_contact_info = new olariv2_Calendar_And_Events();
?>
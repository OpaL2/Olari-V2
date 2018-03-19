<?php

class olariv2_Calendar_And_Events extends WP_Widget {

  public function __construct() {
    parent::__construct( 'olariv2-calendar-and-events', 'Olari-v2 Calendar and events');
    add_action( 'widgets_init', function() { register_widget( 'olariv2_Calendar_And_Events' ); } );
  }

  public $args = array(
        'before_title'  => '<h3 class="widgettitle">',
        'after_title'   => '</h3>',
        'before_widget' => '<div class="widget-wrap">',
        'after_widget'  => '</div>'
    );
 

  public function widget( $args, $instance ) {

    echo $args['before_widget'];
    ?>

    <a href="<?php echo esc_url($instance['calendar_url'], 'olariv2'); ?>">
      <?php echo esc_html__( 'Calendar', 'olariv2') ?>
    </a>

    <?php
    echo $args['after_widget'];
  }

  public function form( $instance ) {

    $calendar_url = !empty($instance['calendar_url']) ? $instance['calendar_url'] : esc_html__('', 'olariv2');
    $event_category = !empty($instance['event_category']) ? $instance['event_category'] : esc_html__('', 'olariv2');
    ?>
    <p>
      <label for="<?php echo esc_attr( $this->get_field_id( 'calendar_url' ) ); ?>">
        <?php esc_attr_e( 'Calendar url:', 'olariv2' ); ?>
      </label>
      <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'calendar_url' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'calendar_url' ) ); ?>" type="text" value="<?php echo esc_attr( $calendar_url ); ?>">
    </p>
    <p>
      <label for="<?php echo esc_attr( $this->get_field_id( 'event_category' ) ); ?>">
        <?php esc_attr_e( 'Event post category:', 'olariv2'); ?>
      </label>
      <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'event_category' )); ?>" name="<?php echo esc_attr( $this->get_field_name( 'event_category' )); ?>" type="text" value="<?php echo esc_attr( $event_category ); ?>">
    </p>


    <?php

  }

  public function update( $new_instance, $old_instance ) {
    $instance = array();

    $instance['calendar_url'] = (!empty($new_instance['calendar_url'])) ? esc_url($new_instance['calendar_url']) : '';
    $instance['event_category'] = (!empty($new_instance['event_category'])) ? esc_html(strip_tags($new_instance['event_category'])) : '';

    return $instance;
  }
}

$olariv2_contact_info = new olariv2_Calendar_And_Events();
?>
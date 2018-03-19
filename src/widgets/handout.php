<?php


class olariv2_Handout extends WP_Widget {

  public function __construct() {
    parent::__construct( 'olariv2-handout', __('Olari-v2 Handout', 'olariv2'));
    add_action( 'widgets_init', function() { register_widget( 'olariv2_Handout' ); } );
  }

  public function widget( $args, $instance ) {

    

  }

  public function form( $instance ) {

    ?>


    <?php

  }

  public function update( $new_instance, $old_instance ) {

  }
}

$olariv2_handout = new olariv2_Handout();


?>
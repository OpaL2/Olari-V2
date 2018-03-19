<?php

/* Widget for generating mobile toolbar
 *  
 *
 */

class olariv2_Contact_Info extends WP_Widget {

  public function __construct() {
    parent::__construct( 'olariv2-contact-info', 'Olari-v2 Contact Info');
    add_action( 'widgets_init', function() { register_widget( 'olariv2_Contact_Info' ); } );
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

$olariv2_contact_info = new olariv2_Contact_Info();


?>
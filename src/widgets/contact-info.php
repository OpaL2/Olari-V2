<?php

class olariv2_Contact_Info extends WP_Widget {

  public function __construct() {
    parent::__construct( 'olariv2-contact-info', 'Olari-v2 Contact Info');
    add_action( 'widgets_init', function() { register_widget( 'olariv2_Contact_Info' ); } );
  }

  public function widget( $args, $instance ) {
    echo $args['before_widget'];
    ?>

    <div class="contact-info-widget-content">
      
      <a href="<?php echo ('mailto:' . esc_attr($instance['email']));?>" id="contact-info-widget-email" class="contanct-info-widget-item">
        <img src="" id="contact-info-widget-email-img" class="contact-info-widget-img">
        <h3 class="contact-info-widget-item-title">
          <?php esc_html_e($instance['email']) ?>
        </h3>
      </a>

      <a href="<?php echo ('tel:' . esc_attr($instance['telephone'])); ?>" id="contact-info-widget-tel" class="contanct-info-widget-item">
        <img src="" id="contact-info-widget-tel-img" class="contact-info-widget-img">
        <h3 class="contact-info-widget-item-title"><?php esc_html_e($instance['telephone']) ?></h3>
      </a>

      <a href="<?php esc_attr_e($instance['maps_url'])?>" id="contact-info-widget-addr" class="contanct-info-widget-item">
        <img src="" id="contact-info-widget-addr-img" class="contact-info-widget-img">
        <h3 class="contact-info-widget-item-title"><?php esc_html_e($instance['address']) ?></h3>
      </a>

    </div>
    <?php
    echo $args['after_widget'];
  }

  public function form( $instance ) {

    $email = !empty($instance['email']) ? $instance['email'] : esc_html__('', 'olariv2');
    $telephone = !empty($instance['telephone']) ? $instance['telephone'] : esc_html__('', 'olariv2');
    $address = !empty($instance['address']) ? $instance['address'] : esc_html__('', 'olariv2');
    $maps_url = !empty($instance['maps_url']) ? $instance['maps_url'] : esc_html__('', 'olariv2');

    ?>
    <p>
      <label for="<?php esc_attr_e( $this->get_field_id('email')); ?>">
        <?php esc_attr_e('Email address: ', 'olariv2'); ?>
      </label>
      <input class="widefat" id="<?php esc_attr_e( $this-> get_field_id('email'));?>" type="email" name="<?php esc_attr_e( $this->get_field_name('email')); ?>" value="<?php esc_attr_e( $email ); ?>">
    </p>

    <p>
      <label for="<?php esc_attr_e( $this->get_field_id('telephone')); ?>">
        <?php esc_attr_e('Telephone:', 'olariv2') ?>
      </label>
      <input class="widefat" id="<?php esc_attr_e($this->get_field_id('telephone')); ?>" type="tel" name="<?php esc_attr_e( $this->get_field_name('telephone')); ?>" value="<?php esc_attr_e( $telephone); ?>" >
    </p>

    <p>
      <label for="<?php esc_attr_e( $this->get_field_id('address')); ?>">
        <?php esc_attr_e('Address:', 'olariv2'); ?>
      </label>
      <input class="widefat" id="<?php esc_attr_e($this->get_field_id('address')); ?>" type="text" name="<?php esc_attr_e( $this->get_field_name('address')); ?>" value="<?php esc_attr_e( $address); ?>">

    </p>

    <p>
      <label for="<?php esc_attr_e( $this->get_field_id('maps_url')); ?>">
        <?php esc_attr_e('Url to maps service:', 'olariv2'); ?>
      </label>
      <input class="widefat" id="<?php esc_attr_e($this->get_field_id('maps_url')); ?>" type="text" name="<?php esc_attr_e( $this->get_field_name('maps_url')); ?>" value="<?php esc_attr_e( $maps_url ); ?>">
    </p>

    <?php

  }

  public function update( $new_instance, $old_instance ) {
    $instance = array();

    $instance['email'] = (!empty($new_instance['email']) ? esc_attr($new_instance['email']) : '');

    $instance['telephone'] = (!empty($new_instance['telephone']) ? esc_attr($new_instance['telephone']) : '');

    $instance['address'] = (!empty($new_instance['address']) ? esc_attr($new_instance['address']) : '');

    $instance['maps_url'] = (!empty($new_instance['maps_url']) ? esc_url($new_instance['maps_url']) : '');

    return $instance;
  }
}

$olariv2_contact_info = new olariv2_Contact_Info();


?>
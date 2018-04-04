<?php 

class olariv2_Social_Media extends WP_Widget {

  public function __construct() {
    parent::__construct('olariv2_social_media', 'Olari-v2 Social Media');
    add_action('widgets_init', function() { register_widget('olariv2_Social_Media');});
  }

  public function widget($args, $instance) {

    echo $args['before_widget'];
    ?>

    <div class="social-media-widget-content">
      <div id="social-media-widget-instagram" class="social-media-widget-item">
        <span id="social-media-widget-instagram-img" class="social-media-widget-img">
          <a href="<?php echo esc_url($instance['instagram']); ?>">
            <i class="fab fa-instagram"></i>
          </a>
        </span>
      </div>
      <div id="social-media-widget-facebook" class="social-media-widget-item">
        <span id="social-media-widget-facebook-img" class="social-media-widget-img">
          <a href="<?php echo esc_url($instance['facebook']); ?>">
           <i class="fab fa-facebook"></i>
          </a>
        </span>
      </div>
      <div id="social-media-widget-twitter" class="social-media-widget-item">
        <span id="social-media-widget-twitter-img" class="social-media-widget-img">
          <a href="<?php echo esc_url($instance['twitter']); ?>">
            <i class="fab fa-twitter"></i>
          </a>
        </span>
    </div>

    <?php
    echo $args['after_widget'];

  }

  public function form($instance) {

    $instagram = !empty($instance['instagram']) ? $instance['instagram'] : __('', 'olariv2');
    $facebook = !empty($instance['facebook']) ? $instance['facebook'] : __('', 'olariv2');
    $twitter = !empty($instance['twitter']) ? $instance['twitter'] : __('', 'olariv2');
    ?>
    <p>
      <label for="<?php esc_attr_e($this->get_field_id('instagram')); ?>">
        <?php esc_attr_e('Instagram url', 'olariv2'); ?>
      </label>
      <input class="widefat" id="<?php esc_attr_e($this->get_field_id('instagram')); ?>" type="text" name="<?php esc_attr_e($this->get_field_name('instagram')); ?>" value="<?php esc_attr_e($instagram); ?>">
    </p>

    <p>
      <label for="<?php esc_attr_e($this->get_field_id('facebook')); ?>">
        <?php esc_attr_e('Facebook url', 'olariv2'); ?>
      </label>
      <input class="widefat" id="<?php esc_attr_e($this->get_field_id('facebook')); ?>" type="text" name="<?php esc_attr_e($this->get_field_name('facebook')); ?>" value="<?php esc_attr_e($facebook); ?>">
    </p>

    <p>
      <label for="<?php esc_attr_e($this->get_field_id('twitter')); ?>">
        <?php esc_attr_e('Twitter url', 'olariv2'); ?>
      </label>
      <input class="widefat" id="<?php esc_attr_e($this->get_field_id('twitter')); ?>" type="text" name="<?php esc_attr_e($this->get_field_name('twitter')); ?>" value="<?php esc_attr_e($twitter); ?>">
    </p>

    <?php

  }

  public function update($new_instance, $old_instance) {

    $instance = array();

    $instance['instagram'] = !empty($new_instance['instagram']) ? esc_url($new_instance['instagram']) : '';

    $instance['facebook'] = !empty($new_instance['facebook']) ? esc_url($new_instance['facebook']) : '';

    $instance['twitter'] = !empty($new_instance['twitter']) ? esc_url($new_instance['twitter']) : '';

    return $instance;
  }


}
$olariv2_social_media = new olariv2_Social_Media();

?>
<?php


class olariv2_Handout extends WP_Widget {

  public function __construct() {
    parent::__construct( 'olariv2-handout', __('Olari-v2 Handout', 'olariv2'));
    add_action( 'widgets_init', function() { register_widget( 'olariv2_Handout' ); } );
  }

  public function widget( $args, $instance ) {

    echo ($args['before_widget']);
    ?>
    <div class="handout-widget-content"> 

    <?php

    $loop = new WP_Query(array(
      'cat' => $instance['category'],
      'posts_per_page' => 5
    ));

    while ( $loop->have_posts() ) : $loop->the_post();
      global $post;?>
      
      <div class="handout-widget-item">
        <a href="<?php the_permalink(); ?>"><h3 class="handout-widget-item-title"><?php esc_html_e(the_title()); ?></h3></a>
      </div>
    <?php endwhile; ?>

    <a href="<?php echo esc_url( get_category_link($instance['category'])); ?>" ><?php _e('Show more...', 'olariv2'); ?></a>

  </div>
  <?php

    echo ($args['after_widget']);
  }

  public function form( $instance ) {

    $event_category = !empty($instance['category']) ? $instance['category'] : esc_html__('', 'olariv2');

    ?>
    <p>
      <label for="<?php echo esc_attr( $this->get_field_id( 'category' )); ?>">
        <?php esc_attr_e( 'Post category to display:', 'olariv2') ?>
      </label>
      <select class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'category' )); ?>" name="<?php echo esc_attr( $this->get_field_name( 'category' )); ?>">

        <?php foreach (get_terms( array('taxonomy' => 'category')) as $value) { ?>
          <option value="<?php echo $value->term_id; ?>"><?php echo $value->name; ?> </option>
          <?php }; ?>
          
      </select>
    </p>
    <?php

  }

  public function update( $new_instance, $old_instance ) {
    $instance = array();

    $instance['category'] = (!empty($new_instance['category']) ? esc_html($new_instance['category']) : '');

    return $instance;
  }
}

$olariv2_handout = new olariv2_Handout();


?>
<?php
  $loop = new WP_Query(array(
    'cat' => get_theme_mod('front_page_post_category'),
    'posts_per_page' => 10
  ));
?>


<div id="theloop" class="loop">
  <?php if($loop->have_posts()) : while( $loop->have_posts() ) : $loop->the_post(); ?>

  <div class="post">
    <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

    <div class="post-content">
      <?php the_excerpt(); ?>
    </div>
  </div>


  <?php endwhile; else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.', 'olariv2' ); ?></p>
  <?php endif; ?>
</div>
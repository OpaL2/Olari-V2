
<div id="theloop" class="loop">
  <?php if(have_posts()) : while( have_posts() ) : the_post(); ?>

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
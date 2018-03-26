<?php 

 /**
 * @package olariv2
 */

get_header();

?>

<div id="theloop" class="loop">
  <?php if(have_posts()) : while( have_posts() ) : the_post(); ?>


  <header class="page-branding">
    <h2 class="page-title"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a></h2>
  </header>

  <div class="page-content">
    <?php the_content(); ?>
  </div>

  <?php endwhile; else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.', 'olariv2' ); ?></p>
  <?php endif; ?>
</div>

<?php

get_footer();

 ?>
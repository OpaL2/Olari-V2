<?php 

/**
* @package olariv2
*/

get_header();

?>

<div class="row justify-content-center">
  <div id="page" class="col-12 mx-0 mx-lg-2 rounded ">
  <?php while( have_posts() ) : the_post(); ?>


  <header class="my-2">
    <h3 class=""><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a></h3>
    <hr class="mt-2">
    <?php 
    global $post;
      if(has_excerpt($post)):
     ?>
     <p class="lead"><?php esc_html_e(get_the_excerpt()); ?>/p>
    <?php endif; ?>
  </header>

    <div class="bg-white p-3 rounder">
      <?php the_content(); ?>
    </div>
      <?php endwhile; ?>
  </div>
</div>



<?php get_footer(); ?>
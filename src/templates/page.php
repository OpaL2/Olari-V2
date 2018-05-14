<?php 

 /**
 * @package olariv2
 */

get_header();

?>

<div class="row justify-content-center">
  <article id="page" class="col-12 mx-0 mx-lg-2 rounded ">
  <?php while( have_posts() ) : the_post(); ?>


  <header class="">
    <h3 class="display-4"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a></h3>
    <hr class="mt-2 mb-0">
    <?php 
    global $post;
      if(has_excerpt($post)):
     ?>
     <p class="lead mt-2"><?php esc_html_e(get_the_excerpt()); ?></p>
    <?php endif; ?>
  </header>
  <div class="bg-white p-3 rounder">
    <?php the_content(); ?>
  </div>
  <?php endwhile; ?>
  </article>
</div>

<?php

get_footer();

 ?>
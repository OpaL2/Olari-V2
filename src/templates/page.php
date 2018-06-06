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

    <?php 
      global $post;
      #If page has parent page generate title with parent page as part of path
      if ( $post->post_parent ):
        $parent = get_post($post->post_parent);
        $title = '<a href="' . esc_url(get_permalink($parent)) . '">' . get_the_title($parent) . '</a> / <a href="' . get_permalink() . '">' . get_the_title() . '</a>';
      else:
        $title = '<a href="' . get_permalink() . '">' . get_the_title() . '</a>';
      endif;
     ?>

    <h3 class="h1 font-weight-light"><?php echo $title; ?></h3>
    <?php
      #Preserve actual site
      $old_post = $post;

      #Generate subpage navigation menu, if has child pages or parent page
      $query = new WP_Query(array('post_parent' => $post->ID, 'post_type' => 'page'));
      if( $query -> have_posts() || $post->post_parent):
    ?>
      <div id="react-submenu"></div>

    <?php endif; ?>

    <?php 

      if(has_excerpt($post)):
     ?>
    <hr class="mt-2 mb-0">
    <p class="lead mt-2"><?php esc_html_e(get_the_excerpt()); ?></p>
    <?php endif; ?>

  </header>


  <div class="bg-white p-3 rounder">
    <?php $post = $old_post; 
    #Reload actual site
    setup_postdata($post); ?>
    <?php the_content(); ?>
  </div>
  <?php endwhile; ?>
  </article>
</div>

<?php

get_footer();

 ?>
<?php 

/**
* @package olariv2
*/

get_header();

?>

<div id="theloop" class="loop">
  <?php if(have_posts()) : while( have_posts() ) : the_post(); ?>

  <header class="post-branding">
    <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
  </header>

  <div class="post-content">
    <?php the_content(); ?>
  </div>



  <?php endwhile; ?>

  <div id="post-pagination" class="pagination-links">

  <?php
    the_posts_pagination( array(
      'prev_text' => '<span class="post-nav-arrow"><i class="fas fa-angle-left"></i></span>',
      'next_text' => '<span class="post-nav-arrow"><i class="fas fa-angle-right></i></span>',
      'before_page_number' => '<span class="meta-nav screen-reader-text">' .
      esc_html__('Page', 'olariv2') . '</span>'
    ));
  ?>

  </div>


  <?php else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.', 'olariv2' ); ?></p>
  <?php endif; ?>
</div>

<?php 


?>




<?php get_footer(); ?>
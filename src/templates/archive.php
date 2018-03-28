<?php 
/**
* @package olariv2
*/

get_header();

 ?>

<header>
  <?php the_archive_title( '<h2 class="page-subtitle">', '</h2>'); ?>
</header>

<?php get_template_part('partials/theloop', 'excrept');

the_posts_pagination( array(
        'prev_text'          => esc_html__( 'Previous page', 'olari' ),
        'next_text'          => esc_html__( 'Next page', 'olari' ),
        'before_page_number' => '<span class="meta-nav screen-reader-text">' . esc_html__( 'Page', 'olari' ) . ' </span>',
      ) );


get_footer(); ?>
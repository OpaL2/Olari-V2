<?php 
/**
* @package olariv2
*/

get_header();
 ?>

<header class="row" role="cateogry header">
  <?php the_archive_title( '<h2>', '</h2>'); ?>
</header>

<div id="posts" class="row justify-content-center">
  <?php while(have_posts() ) : the_post(); ?>
  <div class="col-lg-6 my-3 mt-md-0 my-lg-3">
    <div class="mx-0 bg-white p-3 rounded">
      <h3 class=""><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <?php if(has_post_thumbnail()) : ?>
        <a href="<?php the_permalink(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" class="mw-100 h-auto d-inline-block px-3"></a>
      <?php endif ?>

        <?php the_excerpt(); ?>

        <?php 
          $tags = get_the_tags();
          $html = '<nav class="nav" role="post tags">';
          if ($tags): foreach ( $tags as $tag ) {
            $tag_link = get_tag_link($tag->term_id);

            $html .= "<a href='{$tag_link}' class='nav-item nav-link'>{$tag->name}</a>";
          }
          $html .= '</nav>';
          echo $html;
        endif;
         ?>
    </div>
  </div>

  <?php endwhile; ?>
</div>

<div id="post-pagination" class="pagination-links">

<?php
the_posts_pagination( array(
        'prev_text'          => esc_html__( 'Previous page', 'olariv2' ),
        'next_text'          => esc_html__( 'Next page', 'olariv2' ),
        'before_page_number' => '<span class="meta-nav screen-reader-text">' . esc_html__( 'Page', 'olariv2' ) . ' </span>',
      ) );
?>

</div>

<?php get_footer(); ?>
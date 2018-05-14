<?php
/**
* @package olariv2
*/

get_header();

  $term = get_term(get_query_var( 'cat' ));
  $paged = get_query_var( 'paged' )  ? get_query_var( 'paged' ) : 1;

  $loop = new WP_Query(array(
    'cat' => $term->term_id,
    'posts_per_page' => 6,
    'paged' => $paged
  ));
?>

<header id="category-header" class="row my-2">
  <div class="col-12 mx-0 mx-lg-2 rounded">
    <h3 class="display-4"><a href="<?php echo esc_url("/?cat=" . $term->term_id); ?>"><?php esc_html_e($term->name);?></a></h3>
    <hr class="mt-2 mb-0">
  </div>
</header>

<div id="posts" class="row">
  <?php while( $loop->have_posts() ) : $loop->the_post(); ?>
  <div class="col-12 col-lg-6 my-3 mt-md-0 my-lg-3">
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

<footer class="row justify-content-center">

  <div class="col-12 mx-0">
    <hr class="mb-2">
    <nav class="" aria-label="pagination navigation" id="pagination-nav">
<?php

echo paginate_links( array(
  'format' => '/page/%#%',
  'total' => $loop->max_num_pages,
  'current' => $paged,
  'mid_size' => 2,
  'type' => 'list',
  'prev_text' => '<i class="fas fa-angle-double-left"></i> ' . __('Previous', 'olariv2'),
  'next_text' => __('Next', 'olariv2') . ' <i class="fas fa-angle-double-right"></i>'
));
wp_reset_postdata();
?>
    </nav>
  </div>
</footer>


<?php

get_footer();

?>
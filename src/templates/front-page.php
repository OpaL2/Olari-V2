
<?php get_header(); ?>

<?php if( is_front_page() && !is_home() ) : while( have_posts() ) : the_post(); ?>

<div class="row justify-content-center">
  <div class="jumbotron col-12 mx-0 mx-lg-5 bg-white rounded">
      <?php the_content(); ?>
  </div>
</div>
<?php endwhile; endif; ?>


<!--posts:begin-->

<?php
  $loop = new WP_Query(array(
    'cat' => get_theme_mod('front_page_post_category'),
    'posts_per_page' => 6,
    'paged' => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1
  ));
?>
<div id="posts" class="row justify-content-center">
  <?php while( $loop->have_posts() ) : $loop->the_post(); ?>
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

<div class="row justify-content-center bg-white mx-1 my-3 mt-md-0 mt-lg-3 rounded p-3">
  <a href="/?cat=<?php echo get_theme_mod('front_page_post_category'); ?>" class="btn btn-outline-primary btn-lg" role="show more" type="button"><?php _e('Show more', 'olariv2');?></a>
</div>

<!--posts:end-->
<?php get_footer(); ?>
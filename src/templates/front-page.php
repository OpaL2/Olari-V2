§
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
<div id="posts" class="row">
  <?php while( $loop->have_posts() ) : $loop->the_post(); ?>
  <div class="col-12 col-lg-6 col-xl-4 my-3 mt-md-0 my-lg-3">
    <div class="mx-0 bg-white p-3 rounded">
      <h3 class=""><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3> <span class="small text-info"><?php the_time('d.m.Y'); ?> </span>
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

<div class="row justify-content-center">
  <div class="col-12 mx-0">
    <hr class="mb-2">
    <div class="w-100 text-center">
      <a class="" href="/?cat=<?php echo get_theme_mod('front_page_post_category'); ?>"><?php _e("Show all", 'olariv2') ?> <i class="fas fa-angle-double-right"></i></a>
    </div>
  </div>
</div>

<?php wp_reset_postdata(); ?>

<!--posts:end-->
<?php get_footer(); ?>
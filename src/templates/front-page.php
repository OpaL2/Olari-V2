
<?php get_header(); ?>

<?php
  $loop = new WP_Query(array(
    'cat' => get_theme_mod('front_page_post_category'),
    'posts_per_page' => 10
  ));
?>
<div class="row">
  <?php if($loop->have_posts()) : while( $loop->have_posts() ) : $loop->the_post(); ?>
  <div class="col-lg-6 my-5 my-lg-3">
    <div class="mx-0 mx-lg-2">
      <h3 class="mt-1"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <?php if(has_post_thumbnail()) : ?>
        <a href="<?php the_permalink(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" class="mw-100 h-auto d-inline-block px-3"></a>
      <?php endif ?>

        <?php the_excerpt(); ?>
        <?php the_tags(' '); ?>
    </div>
  </div>

  <?php endwhile; else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.', 'olariv2' ); ?></p>
  <?php endif; ?>
</div>
<?php get_footer(); ?>
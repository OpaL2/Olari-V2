
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
    'posts_per_page' => 10
  ));
?>
<div id="posts" class="row justify-content-center">
  <?php if($loop->have_posts()) : while( $loop->have_posts() ) : $loop->the_post(); ?>
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

  <?php endwhile; else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.', 'olariv2' ); ?></p>
  <?php endif; ?>
</div>

<!--posts:end-->
<?php get_footer(); ?>
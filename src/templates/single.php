<?php 

/**
* @package olariv2
*/

get_header();

?>

<div class="row justify-content-center">
  <article id="post" class="col-12 mx-0 mx-lg-2 rounded ">
  <?php while( have_posts() ) : the_post(); ?>


  <header class="mt-2 mb-0">
    <h3 class=""><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a></h3>
    <hr class="mt-3 mb-0">
    <?php 
    global $post;
      if(has_excerpt($post)):
     ?>
     <p class="lead"><?php esc_html_e(get_the_excerpt()); ?>/p>
    <?php endif; ?>
    <img src="<?php the_post_thumbnail_url(); ?>" class="w-100 h-auto mb-0 mt-3">
  </header>

    <div class="bg-white p-3 rounded mt-3">
      <?php the_content(); ?>
    </div>
    
        <?php 
          $tags = get_the_tags();
          $html = '<div class="bg-white p-3 rounded mt-3"> <nav class="nav" role="post tags">';
          if ($tags): foreach ( $tags as $tag ) {
            $tag_link = get_tag_link($tag->term_id);

            $html .= "<a href='{$tag_link}' class='nav-item nav-link'>{$tag->name}</a>";
          }
          $html .= '</div></nav>';
          echo $html;
        endif;
         ?>
    <?php endwhile; ?>
  </article>
</div>



<?php get_footer(); ?>
<?php 
/**
* @package olariv2
*/

get_header();

 ?>

<header>
  <?php the_archive_title( '<h2 class="page-subtitle">', '</h2>'); ?>
</header>

<?php get_template_part('partials/theloop', 'excrept'); ?>


<?php get_footer(); ?>
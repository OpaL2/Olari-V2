<?php 

/**
* @package olariv2
*/

get_header();

 ?>

<header class="page-branding">
  <h2 class="page-title" ><?php printf( __('Search results for: %s', 'olariv2'), get_search_query()); ?></h2>
</header>

<?php

get_template_part('partials/theloop', 'excrept');
get_footer();

?>
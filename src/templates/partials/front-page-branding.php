<?php 
/**
* @package olariv2
*/

 ?>


<header id="front-page-branding" class="front-page-branding">
  <div class="site-logo"><img src="<?php echo wp_get_attachment_url(get_theme_mod( 'front_page_img')); ?>"></div>

  <div class="m-front-page-branding">
    <?php wp_nav_menu(array('theme_location' => 'hilights_mobile')); ?>
  </div>

  <a id="show-more" class="m-front-page-branding" href="#front-page-content"><i class="fas fa-angle-down"></i> </a>

  <div class="l-front-page-branding">
    <?php wp_nav_menu(array('theme_location' => 'hiligths_desktop')); ?>
  </div>
</header>
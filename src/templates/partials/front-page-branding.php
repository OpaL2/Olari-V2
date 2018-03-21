<header id="front-page-branding" class="front-page-branding">
  <div class="site-logo"><img src="<?php echo wp_get_attachment_url(get_theme_mod( 'front_page_img')); ?>"></div>

  <div class="m-front-page-branding">
    <?php wp_nav_menu(array('theme_location' => 'hilights_mobile')); ?>
  </div>

  <button id="show-more" class="m-front-page-branding"><?php echo __("Show more", 'olariv2') ?> </button>

  <div class="l-front-page-branding">
    <?php wp_nav_menu(array('theme_location' => 'hiligths_desktop')); ?>
  </div>
</header>
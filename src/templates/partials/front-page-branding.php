<div class="front-page-branding">
  <div class="site-logo"><img src="<?php echo wp_get_attachment_url(get_theme_mod( 'front_page_img')); ?>"></div>

  <div class="m-front-page-branding">
    <?php wp_nav_menu('hilights_mobile'); ?>
  </div>

  <div class="l-front-page-branding">
    <?php wp_nav_menu('hiligths_desktop'); ?>
  </div>
</div>
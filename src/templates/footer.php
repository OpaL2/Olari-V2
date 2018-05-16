<?php 
/**
* @package olariv2
*/
 ?>       
      </div>
      </main>
      <div id="react-mobile-root" class="col-sm-2 d-md-none my-0 my-sm-2 my-md-0"></div>
      <div id="sidebar" class="col-12 col-md-5 col-lg-4 col-xl-3 ml-md-auto border-left ">
        <div class="row">
          <div id="react-sidebar" class="col-12 rounded">
          </div>
        </div>
        <div class="row">
          <div class="col-12 rounded pb-3">
            <?php dynamic_sidebar('primary'); ?>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer id="site-footer" class="border-top row mx-2 bg-white">
      <div class="col-6 nav text-left flex-column small">
        <a href="<?php echo esc_url("mailto:" . get_theme_mod('contact_info_widget_email')); ?>" class="nav-item nav-link py-1">
          <i class="far fa-envelope"></i> 
          <?php esc_html_e(get_theme_mod('contact_info_widget_email')); ?>
        </a>
        <a href="<?php echo esc_url("tel:" . get_theme_mod('contact_info_widget_telephone')); ?>" class="nav-item nav-link py-1">
          <i class="fas fa-phone"></i> 
          <?php esc_html_e(get_theme_mod('contact_info_widget_telephone')); ?>
        </a>
        <a href="<?php echo esc_url(get_theme_mod('contact_info_widget_maps_url')); ?>" class="nav-item nav-link py-1">
          <i class="fas fa-map-marker-alt"></i> 
          <?php esc_html_e(get_theme_mod('contact_info_widget_address')); ?>
        </a>

      </div>

      <div class="col-6 text-right">
        <a href="<?php echo esc_url(get_theme_mod('social_media_facebook')); ?>" class="text-info m-2" style="font-size: 50px"><i class="fab fa-facebook"></i></a>
        <a href="<?php echo esc_url(get_theme_mod('social_media_instagram')); ?>" class="text-info m-2" style="font-size: 50px"><i class="fab fa-instagram"></i></a>
        <a href="<?php echo esc_url(get_theme_mod('social_media_twitter')); ?>" class="text-info m-2" style="font-size: 50px"><i class="fab fa-twitter"></i></a>
      </div>
  </footer>
  <?php wp_footer(); ?>
<!-- end:body -->
</body>
</html>
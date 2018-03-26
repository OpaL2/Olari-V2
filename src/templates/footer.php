<?php 
/**
* @package olariv2
*/
 ?>

  </main>

  <footer class="site-footer">
    <div id="to-top-btn"><a href="#navbar"> <?php _e('To top', 'olariv2') ?></a> </div>
    <?php the_widget(
      'olariv2_Social_Media',
      array(
        'instagram' => get_theme_mod('social_media_instagram'),
        'facebook' => get_theme_mod('social_media_facebook'),
        'twitter' => get_theme_mod('social_media_twitter')
      ),
      array(
        'before_widget' => '<div id="footer-social-media" class="footer-media">',
        'after_widget' => '</div>'
      )); ?>
  </footer>

<?php if(is_front_page()): ?>
<!-- end:front-page-content-wrapper -->
</div>
<?php endif; ?>

  <?php wp_footer(); ?>
<!-- end:body -->
</body>
</html>
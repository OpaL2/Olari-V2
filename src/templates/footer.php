<?php 
/**
* @package olariv2
*/
 ?>       
      </main>
      <div id="react-mobile-root" class="col-sm-2 d-md-none"></div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="row">
          <div id="react-sidebar" class="col-12">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <?php dynamic_sidebar('primary'); ?>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer id="footer" class="site-footer border-top mt-3 border-bottom">
    <div id="to-top-btn"><a href="<?php if(is_front_page()): echo ''; else: echo '#top'; endif;?>"> <i class="fas fa-angle-up"></i></a> </div>
  </footer>
  <?php wp_footer(); ?>
<!-- end:body -->
</body>
</html>
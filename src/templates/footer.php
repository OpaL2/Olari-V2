<?php 
/**
* @package olariv2
*/
 ?>       
      </div>
      </main>
      <div id="react-mobile-root" class="col-sm-2 d-md-none my-0 my-sm-2 my-md-0"></div>
      <div id="sidebar" class="col-12 col-md-5 col-lg-4 col-xl-2 ml-md-auto border-left">
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

  <footer id="footer" class="site-footer border-top">
    <div id="to-top-btn"><a href="<?php if(is_front_page()): echo ''; else: echo '#top'; endif;?>"> <i class="fas fa-angle-up"></i></a> </div>
  </footer>
  <?php wp_footer(); ?>
<!-- end:body -->
</body>
</html>
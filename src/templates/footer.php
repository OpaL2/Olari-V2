<?php 
/**
* @package olariv2
*/
 ?>

      </main>
      <div id="react-sidebar" class="col-12 col-sm-2 col-md-6 col-lg-4 col-xl-3"></div>
    </div>
  </div>

  <footer id="footer" class="site-footer">
    <div id="to-top-btn"><a href="<?php if(is_front_page()): echo '#front-page-content'; else: echo '#content'; endif;?>"> <i class="fas fa-angle-up"></i></a> </div>
  </footer>
  <?php wp_footer(); ?>
<!-- end:body -->
</body>
</html>
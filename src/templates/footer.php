<?php 
/**
* @package olariv2
*/
 ?>       
      </main>
      <div id="react-sidebar" class="col-12 col-sm-2 col-md-6 col-lg-4"></div>
    </div>
  </div>

  <footer id="footer" class="site-footer border-top mt-3 border-bottom">
    <div id="to-top-btn"><a href="<?php if(is_front_page()): echo ''; else: echo '#top'; endif;?>"> <i class="fas fa-angle-up"></i></a> </div>
  </footer>
  <?php wp_footer(); ?>
<!-- end:body -->
</body>
</html>
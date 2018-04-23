<?php 
/**
* @package olariv2
*/
 ?>

  </main>

  <footer id="footer" class="site-footer">
    <div id="to-top-btn"><a href="<?php if(is_front_page()): echo '#front-page-content'; else: echo '#content'; endif;?>"> <i class="fas fa-angle-up"></i></a> </div>
  </footer>
  <?php wp_footer(); ?>
<!-- end:body -->
</body>
</html>
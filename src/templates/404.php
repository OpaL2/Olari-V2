<?php 
/**
* @package olariv2
*/


get_header();

?>
<div class="row justify-content-center">
  <div class="col-12">
    <div class="jumbotron col-12 mx-0 mx-lg-2 bg-white rounded">
      <div class="display-4">404</div> 
      <p class="lead"><?php _e('Page you requested could not be found', 'olariv2') ?></p>
      <hr class="my-4">
      <form role="search" method="get" class="form" action="<?php echo esc_url( home_url( '/' )); ?>">
        <div class="form-group">
          <label for="search"> <?php _e('You can try search to find what you where looking:', 'olariv2') ?> </label>
          <input id="search" type="search" class="form-control" name="s">
          <button type="submit" class="btn btn-outline-primary mt-2"><?php _e('Submit', 'olariv2') ?></button>
        </div>
      </form>
    </div>
  </div>
</div>

<?php

get_footer();
 ?>
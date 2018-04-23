
<form role="search" method="get"  action="<?php echo home_url( '/' ); ?>">
  <div class="form-group">
    <label>
        <span class="sr-only"><?php echo _x( 'Search for:', 'olariv2' ) ?></span>
        <input type="search" class="form-control"
            placeholder="<?php echo esc_attr_x( 'Search …', 'olariv2' ) ?>"
            value="<?php echo get_search_query() ?>" name="s"
            title="<?php echo esc_attr_x( 'Search for:', 'olariv2' ) ?>" />
    </label>
    <input type="submit" class="btn btn-primary"
        value="<?php echo esc_attr_x( 'Search', 'olariv2' ) ?>" />
    </div>
</form>

<!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

  <?php wp_head(); ?>

</head>
<body <?php body_class(); ?> >
<!-- begin:body -->
  <header>
    <div class="site-branding">
      <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a> 
        <?php if($pagename): ?>
          /
          <a href="<?php echo esc_url( get_permalink() ); ?>" rel="$pagename" >
            <?php echo esc_html($pagename); ?>
          </a>
        <?php endif; ?></h1>
    </div>
    <?php wp_nav_menu('primary'); ?>
  </header>
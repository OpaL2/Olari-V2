
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
  <?php if(is_front_page()): get_template_part('partials/front-page', 'branding');?>
    <div class="front-page-content-wrapper">
  <?php endif; ?>
  
  <header id="navbar" class="site-branding">
      <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a> 
        <?php if(is_page()): ?>
          /
          <a href="<?php echo esc_url( get_permalink() ); ?>">
            <?php echo esc_html($pagename); ?>
          </a>
        <?php elseif (is_single()): ?>
          /
          <a href="<?php echo esc_url( get_post_permalink() ); ?>">
            <?php single_post_title(); ?>
          </a>
        <?php endif; ?></h1>

    <div id="m-toolbar-page-menu" class="primary-nav m-toolbar-page">
      <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
    </div>
  </header>
  
  <?php get_sidebar('primary'); ?>

  <?php get_template_part('partials/toolbar', 'mobile'); ?>

  <main class="content">
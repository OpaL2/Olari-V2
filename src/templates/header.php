
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
    <div id="front-page-content" class="front-page-content-wrapper">
  <?php endif; ?>
  
  <header id="navbar" class="site-branding">
    <div class="site-title-wrapper">
      <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) . '#front-page-content' ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a> 
      </h1>
    </div>
      <?php get_template_part('partials/toolbar', 'mobile'); ?>
      <div id="m-toolbar-page-menu" class="m-toolbar-page site-navigation">
        <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
        <?php get_search_form(); ?>
      </div>
  </header>

  <?php get_sidebar('primary'); ?>



  <main id="content" class="">
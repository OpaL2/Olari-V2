
<!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

  <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
<!-- begin:body -->
  <header id="top" class="">
    <nav id="main-navigation" class="navbar navbar-expand sticky-top border-bottom shadow rounded">
      <h1 class=""><a href="<?php echo esc_url( home_url( '/' )); ?>" rel="home" class="navbar-brand"><img src="<?php get_theme_mod('front_page_img'); ?>" width="30" height="30" class="d-inline-block align-top" alt=""><?php bloginfo( 'name' ); ?></a></h1>
    </nav>
  </header>

<img src="<?php get_theme_mod('front_page_img'); ?>">
  <div class="container">
    <div class="row">
      <main id="content" class="col-12 col-sm-10 col-md-6 col-lg-8">
        <div id="react-tablet-root"></div>
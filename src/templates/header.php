
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
  <header  class="bg-white border-bottom">
    <nav id="main-navigation" class="navbar navbar-expand ">
      <a href="<?php echo esc_url( home_url( '/' )); ?>" rel="home" class="navbar-brand">
      <?php 
        $img_ID = get_theme_mod('front_page_img'); 
        if($img_ID):
          $media = wp_get_attachment_url($img_ID);
      ?>
        <img style="height:2.5rem" src="<?php echo esc_url($media) ?>" >
      <?php else: ?>
        <?php bloginfo( 'name' ); ?>
      <?php endif; ?>
      </a>
    </nav>
  </header>

  <div id="top" class="container-fluid bg-light">
    <div class="row justify-content-around">
      <main id="content" class="col-12 col-sm-10 col-md-7 col-lg-8 col-xl-9">
        <div id="react-tablet-root" class="my-2 my-sm-0"></div>
          <div class="container justify-content-center my-3">
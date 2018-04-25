
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
  <header class="navbar">
      <h1 class="navbar-brand"><a href="<?php echo esc_url( home_url( '/' )); ?>" rel="home"><?php bloginfo( 'name' ); ?></a> 
      </h1>

      <div id="react-navigation" class="w-100"></div>


  </header>

    <div id="react-sidebar"> </div>

    <main id="content" class="container">
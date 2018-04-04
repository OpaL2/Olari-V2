
<div id="mobile-toolbar" class="m-toolbar">
  <button id="m-toolbar-button-handout" class="m-toolbar-button">
    <i class="fas fa-info"></i>
  </button>
  <button id="m-toolbar-button-calendar" class="m-toolbar-button">
    <i class="far fa-calendar-alt"></i>
  </button>
  <button id="m-toolbar-button-contact" class="m-toolbar-button">
    <i class="fas fa-address-book"></i>
  </button>
  <button id="m-toolbar-button-menu" class="m-toolbar-button">
    <i class="fas fa-bars"></i>
  </button>
</div>

<div id="toolbar-widgets" class="widget-area" >

  <?php
  the_widget(
    'olariv2_Contact_Info',
    array(
      'email' => get_theme_mod('contact_info_widget_email'),
      'telephone' => get_theme_mod('contact_info_widget_telephone'),
      'address' => get_theme_mod('contact_info_widget_address'),
      'maps_url' => get_theme_mod('contact_info_widget_maps_url')
    ),
    array(
      'before_widget' => '<div id="m-toolbar-page-contact" class="m-toolbar-page">',
      'after_widget' => '</div>'
  ));

  the_widget(
    'olariv2_Handout',
    array('category' => get_theme_mod('handout_widget_category')),
    array(
      'before_widget' => '<div id="m-toolbar-page-handout" class="m-toolbar-page">',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="m-toolbar-title">',
      'after_title' => '</h3>'
    ));
  ?>

  <div class="m-toolbar-page" id="m-toolbar-page-calendar">
    Second toolbar item
  </div>
</div>
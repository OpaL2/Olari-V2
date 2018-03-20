<div id="sidebar-primary" class="sidebar">
  <?php
  the_widget(
    'olariv2_Handout',
    array(),
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

  <?php dynamic_sidebar('primary'); ?>

</div>
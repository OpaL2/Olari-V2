
<div class="m-toolbar">
  <button id="m-toolbar-button-1" class="m-toolbar-button">handout</button>
  <button id="m-toolbar-button-2" class="m-toolbar-button">calendar</button>
  <button id="m-toolbar-button-3" class="m-toolbar-button">contact</button>
  <button id="m-toolbar-button-4" class="m-toolbar-button">menu</button>
</div>

<?php
  the_widget(
    'olariv2_Handout',
    array(),
    array(
      'before_widget' => '<div id="m-toolbar-page-1" class="m-toolbar-page">',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="m-toolbar-title">',
      'after_title' => '</h3>'
    ));
?>

<div class="m-toolbar-page" id="m-toolbar-page-2">
  Second toolbar item
</div>
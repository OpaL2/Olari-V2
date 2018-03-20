<?php 
  $prev_link = get_previous_posts_link(__('&laquo;', 'olariv2'));
  $next_link = get_next_posts_link(__('&raquo;', 'olariv2'));

?>

<?php if (is_front_page()): ?>
<div id="mobile-toolbar" class="m-toolbar">
  <button id="m-toolbar-button-handout" class="m-toolbar-button">handout</button>
  <button id="m-toolbar-button-calendar" class="m-toolbar-button">calendar</button>
  <button id="m-toolbar-button-contact" class="m-toolbar-button">contact</button>
  <button id="m-toolbar-button-menu" class="m-toolbar-button">menu</button>
</div>
<?php elseif (is_single() || is_page()): ?>
  <div class="m-toolbar">
    <?php echo $prev_link ;?>
    <button id="m-toolbar-button-menu" class="m-toolbar-button">menu</button>
    <?php echo $next_link; ?>
  </div>
<?php endif; ?>

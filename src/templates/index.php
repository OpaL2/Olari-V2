<?php

/**
* @package olariv2
*/

header("HTTP/1.1 301 Moved Permanently");
header("Location: " . esc_url( home_url( '/' )));
?>
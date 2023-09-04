<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    if ( ! is_admin() ) {
        wp_enqueue_script('jquery');
        wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
        wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));
        wp_deregister_script( 'jquery' );
        wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.7.0.min.js' );
        wp_enqueue_script( 'child-script',get_stylesheet_directory_uri() . '/script.js');
        wp_enqueue_script( 'mousewheel',get_stylesheet_directory_uri() . '/assets/js/jquery.mousewheel.js');
    }
}
<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();
$pages = get_pages(); 
foreach($pages as $page){
	$pages[$page->menu_order] = $page->post_content;
}
ksort($pages);
$num = 0;
foreach ( $pages as $page ) {
	$data = "<div class='page'>";
	$data .= $page;	
	$data .= "</div>";
	echo $data;
	$num++;
}

get_footer();

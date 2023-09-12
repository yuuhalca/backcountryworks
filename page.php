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
	$pages[$page->menu_order] = [$page->post_content,$page->post_name];
}
ksort($pages);
$num = 0;
foreach ( $pages as $page ) {
	$data = "<div class='page' id='{$page[1]}'><div class='page_content'>";
	$data .= $page[0]."<br>";	
	if($page[1] == "inquiry"){
		$data .= do_shortcode('[contact-form-7 id="dd3bb5b" title="コンタクトフォーム 1"]');
	}
	$data .= "</div></div>";
	echo $data;
	$num++;
}

get_footer();

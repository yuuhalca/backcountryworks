<?php
function backcountry_works_the_posts_navigation() {
    the_posts_pagination(
        array(
            'before_page_number' => esc_html__( 'Page', 'backcountryworks' ) . ' ',
            'mid_size'           => 0,
            'prev_text'          => sprintf(
                '%s <span class="nav-prev-text">%s</span>',
                is_rtl() ? print('<i class="fa-solid fa-chevron-right"></i>') : print('<i class="fa-solid fa-chevron-left"></i>'),
                wp_kses(
                    __( 'Newer <span class="nav-short">posts</span>', 'backcountryworks' ),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                )
            ),
            'next_text'          => sprintf(
                '<span class="nav-next-text">%s</span> %s',
                wp_kses(
                    __( 'Older <span class="nav-short">posts</span>', 'backcountryworks' ),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                ),
                is_rtl() ? print('<i class="fa-solid fa-chevron-left"></i>') : print('<i class="fa-solid fa-chevron-right"></i>')
            ),
        )
    );
}
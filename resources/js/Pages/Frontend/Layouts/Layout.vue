<script setup>
import { ref } from 'vue';
import Header from '../../Frontend/Layouts/Header.vue';
import Slider from '../../Frontend/Layouts/Slider.vue';
import Blogs from '../../Frontend/Layouts/Blogs.vue';
import Footer from '../../Frontend/Layouts/Footer.vue';
import Sidebar from '../../Frontend/Layouts/Sidebar.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="cms-index-index cms-home-page">
            <div id="page">
                <div class="top-banners">
                    <div class="banner"> Populate this marketing banner to advertise a special promotion such as: <span>Save 20%</span> this weekend! </div>
                </div>

                <!-- Page Heading -->
                <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <slot name="header" />
                    </div>
                </header>

                <Header />

                <Slider />

                <!-- Page Content -->
                <main>
                    <slot />
                </main>

                <Blogs />

                <Footer />
            </div>
        </div>
    </div>
</template>

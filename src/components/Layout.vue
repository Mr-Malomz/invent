<template>
	<div class="min-h-screen bg-brand-bg lg:flex lg:justify-between">
        <Sidebar />
        <section class="w-full h-auto">

        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './Sidebar.vue';

export default defineComponent({
  components: { Sidebar },});
</script>

<style></style>

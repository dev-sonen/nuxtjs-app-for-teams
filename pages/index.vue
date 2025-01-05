<script setup lang="ts">
    
    import { useWindowSize } from '@/stores/window'
    const window = useWindowSize()

    onMounted( () => {
        window.getWindowX()
        window.getWindowY()
    } )

</script>

<template>

    <div class="flex items-center space-x-1">
        <h1 class="text-gray-800 text-3xl font-thin">welcome to</h1>
        <img src="@/public/img/nuxt-logo.png" alt="logo" class="h-10 w-10">
        <h1 class="text-[#00dc82] text-3xl font-bold">nuxtjs</h1>
    </div>

    <br>

    <div class="grid gap-1">
        <code class="text-black text-xs font-mono">window x: {{ window.sizex }} px</code>
        <code class="text-black text-xs font-mono">window y: {{ window.sizey }} px</code>
    </div>

</template>

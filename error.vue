<script setup lang="ts">
    
    import type { NuxtError } from '#app'

    const props = defineProps( {
        error: Object as () => NuxtError
    } )

</script>

<template>
    <pre>error: {{ error?.statusCode }} {{ error?.message }}</pre>
</template>
<script setup lang="ts">

    useHead( {
        title: 'nuxt app',
        meta: [
            {
                name: 'description',
                content: 'nuxtjs application for teams'
            }
        ]
    } )
    
</script>

<template>

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

</template>

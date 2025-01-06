<script setup lang="ts">

    import { app , pages } from '@microsoft/teams-js'

    useHead( {
        title: 'nuxt app',
        meta: [
            {
                name: 'description',
                content: 'nuxtjs application for teams'
            }
        ]
    } )

    onMounted( () => {

        app.initialize().then( () => {
            pages.config.setValidityState( true )
            app.notifySuccess()
        } )

    } )
    
</script>

<template>

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

</template>

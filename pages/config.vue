<script setup lang='ts'>

    import { app , pages } from '@microsoft/teams-js'
    
    useHead( {
        title: 'config',
        meta: [
            {
                name: 'description',
                content: 'teams configuration page'
            }
        ]
    } )

    onMounted( () => {

        app.initialize().then( () => {
            pages.config.setValidityState( true )
            app.notifySuccess()
        } )

        pages.config.setConfig( {
            contentUrl: 'https://nuxtjs-app-for-teams.vercel.app/',
            websiteUrl: 'https://nuxtjs-app-for-teams.vercel.app/',
            entityId: 'nuxtjs-app-entity-id',
            suggestedDisplayName: 'nuxt app'
        } )
        .then( res => console.log( res ) )
        .catch( err => console.log( err ) )

    } )

</script>

<template>

    <h1 class='text-gray-800 text-3xl font-thin'>config</h1>

</template>

import { defineStore } from 'pinia'

export const useWindowSize = defineStore( 'size' , {
    state: () => {
        return {
            sizex: 0,
            sizey: 0
        }
    },
    actions: {
        getWindowX() {
            window.addEventListener( 'resize' , () => this.sizex = window.innerWidth )
        },
        getWindowY() {
            window.addEventListener( 'resize' , () => this.sizey = window.innerHeight )
        }
    }
} )

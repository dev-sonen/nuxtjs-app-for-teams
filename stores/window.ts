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
            if ( this.sizex === 0 ) {
                this.sizex = window.innerWidth
            } else {
                window.addEventListener( 'resize' , () => this.sizex = window.innerWidth )
            }
        },
        getWindowY() {
            if ( this.sizey === 0 ) {
                this.sizey = window.innerHeight
            } else {
                window.addEventListener( 'resize' , () => this.sizey = window.innerHeight )
            }
        }
    }
} )

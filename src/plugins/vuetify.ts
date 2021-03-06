import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint:{
        mobileBreakpoint: 'sm'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#1fa767',
                background: '#c9e4ef',
                lightBackground: '#eeeeee',
            },
        },
    },
});

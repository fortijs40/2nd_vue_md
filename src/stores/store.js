import { defineStore } from 'pinia'
import all_songs from '../data/export-songs.js';

export const useStore = defineStore('store', {

    state: () => ({

        allSongs: all_songs,
        user: {
            first_name: 'name',
            last_name: 'surname',
            student_code: 'CODE1234',
            logged_at : [],
            logged_in: false
        }
    }),
    getters: {
    },
    actions: {
        changeLoginStatus() {
            this.user.logged_in = true;
            const now = new Date()
            const formattedTimestamp = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`
            this.user.logged_at.push(formattedTimestamp)
        },
        resetProperties() {
            this.user.first_name = 'name';
            this.user.last_name = 'surname';
            this.user.student_code = 'CODE1234';
            this.user.logged_at = [];
            this.user.logged_in = false;
        }
    }
});

import { defineStore } from 'pinia';
import api from '@/api/api.js'
import { KEY_API } from '@/api/key.js'

export const useAuthorState = defineStore('author', {
  state: (): any => ({
    author: {},
  }),

  actions: {
    async getAuthor(username: string) {
      try {
          const data = await api.fetchApi(`users/${username}?client_id=${KEY_API}`, 'GET');
          this.author = data;
      } catch (e) {
        console.log(e)
      }
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    dir: "assets/images", // Указывает на папку с изображениями
  },
  // Глобальные стили
  css: ["@/assets/scss/main.scss"],

  // Настройка SCSS через Vite (вместо styleResources)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/variables.scss" as *;
            @use "@/assets/scss/mixins.scss" as *;
            @use "@/assets/scss/fonts.scss" as *;
            @use "sass:math";
          `,
        },
      },
    },
  },
});

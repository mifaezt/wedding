// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    prerender: {
      routes: ["/"], // Рендерит главную страницу в HTML
    },
  },
  // Добавляем настройки сервера
  devServer: {
    port: 3001, // Меняем порт на 3001
    host: "0.0.0.0", // Разрешаем доступ снаружи
  },

  modules: ["@nuxt/image"],

  // Исправляем настройки изображений
  image: {
    dir: "public/images",
    domains: ["wedding.mifaezt.ru"],
    provider: "ipx", // Меняем static на ipx
    ipx: {
      modifiers: {
        quality: 80,
        format: ["webp", "jpg", "svg"],
      },
    },
  },

  // Глобальные стили
  css: ["@/assets/scss/main.scss"],

  // Настройка SCSS через Vite
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

  // Добавляем runtime конфиг
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3001",
    },
  },
});

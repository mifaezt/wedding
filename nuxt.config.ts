export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  devServer: {
    port: 3001,
    host: "0.0.0.0",
  },

  modules: ["@nuxt/image"],

  image: {
    dir: "public/images", // Путь относительно корня проекта
    domains: ["127.1.0.0:3001"],
    provider: "ipx",
    // Перенесём formats на верхний уровень
    formats: ["webp", "jpeg", "png", "svg"], // Указываем поддерживаемые форматы
    ipx: {
      modifiers: {
        quality: 80,
        // format: 'webp' // Можно указать конкретный формат, если нужно
      },
    },
  },

  css: ["@/assets/scss/main.scss"],

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

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3001",
    },
  },
});

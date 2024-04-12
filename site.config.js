const CONFIG = {
  // profile setting (required)
  profile: {
    name: "dywidendowo.pl",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Inwestor",
    bio: "Pokazuję swoją drogę do pasywnego dochodu 2500zł miesięcznie z dywidend.",
    email: "dywidendowo@gmail.com",
    github: "fundsparkle",
    // twitter: ""
  },
  projects: [
    {
      name: `dywidendowo.pl`,
      href: "https://github.com/fundsparkle/blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "dywidendowo.pl",
    description: "Witaj na dywidendowo.pl!",
    theme: "auto"
  },

  // CONFIG configration (required)
  link: "https://dywidendowo-blog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "pl-PL", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "77360d84-acbe-42f6-aacf-d63c67c379c1", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }

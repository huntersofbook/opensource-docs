export default defineAppConfig({
  docus: {
    title: 'huntersofbook',
    description:
    'It is a community established specifically to improve the vue ecosystem. Our own team will always give this contribution back to the world.',
    image: 'https://opensource.huntersofbook.com/preview.png',
    url: 'https://opensource.huntersofbook.com',
    socials: {
      twitter: 'huntersofbook',
      github: 'huntersofbook/opensource-docs',
      discord: 'https://discord.gg/xAj9uqMrjC',
    },
    github: {
      dir: '.content',
      branch: 'main',
      repo: 'opensource-docs',
      owner: 'huntersofbook',
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      title: 'huntersofbook',
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    cover: {
      src: '/cover.jpg',
      alt: 'huntersofbook open source project was created for developers',
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs',
        },
      ],
    },
  },
})

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://felix-website-astro.vercel.app',
  outDir: './vercel',
  integrations: [
    mdx(),
    sitemap({
      customPages: ['https://felix-website-astro.vercel.app/about', 'https://felix-website-astro.vercel.app/blog'],
    }),
    prefetch(),
    compress({ path: './vercel' }),
  ],
  output: 'server',
  adapter: vercel(),
})

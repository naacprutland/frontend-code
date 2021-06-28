import { getPathsList } from '../lib/pageProps'

async function getAllBlogPost() {
  const fileList = await getPathsList()
  const blogIds = fileList.reduce((acc, cur) => {
    const slugs = cur.params.slug
    if (slugs[0] === 'blog' && slugs.length > 1) {
      return [...acc, slugs.join('_')]
    }
    return acc
  }, [])

  return blogIds
}

export default getAllBlogPost
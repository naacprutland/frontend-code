const baseApiUrl = process.env.STRAPI_API_URL

const apiEndPoints = {
  postContactMessage: `${baseApiUrl}/contact-messages/send`,
  getStaticPaths: `${baseApiUrl}/staticPaths`,
  getPages: `${baseApiUrl}/pages`,
  get404Page: `${baseApiUrl}/pages?slug=404`,
  getConfig: `${baseApiUrl}/config`
}

export default apiEndPoints
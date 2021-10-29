const baseApiUrl = process.env.STRAPI_API_URL

const apiEndPoints = {
  postContactMessage: `${baseApiUrl}/contact-messages/send`,
  getStaticPaths: `${baseApiUrl}/staticPaths`,
  getPages: `${baseApiUrl}/pages`,
  getPagesPreview: `${baseApiUrl}/pages?_publicationState=preview&slug=`,
  get404Page: `${baseApiUrl}/pages?slug=404`,
  getConfig: `${baseApiUrl}/config`,
  getPagesSearch: `${baseApiUrl}/pages/search`
}

export default apiEndPoints
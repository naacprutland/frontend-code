const baseApiUrl = process.env.STRAPI_API_URL

const apiEndPoints = {
  postContactMessage: `${baseApiUrl}/contact-messages/send`,
  getStaticPaths: `${baseApiUrl}/pages/utils/static`,
  getPages: `${baseApiUrl}/pages`,
  getPagesPreview: `${baseApiUrl}/pages?_publicationState=preview&slug=`,
  get404Page: `${baseApiUrl}/pages?slug=404`,
  getGlobal: `${baseApiUrl}/global/info`,
  getPagesSearch: `${baseApiUrl}/pages/search`,
  getHomePage: `${baseApiUrl}/home-page`,
}

export default apiEndPoints
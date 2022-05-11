const baseApiUrl = process.env.STRAPI_API_URL

const apiEndPoints = {
  baseApiUrl, 
  postContactMessage: `${baseApiUrl}/contact-messages/send`,
  getStaticPaths: `${baseApiUrl}/pages/utils/static`,
  getPages: `${baseApiUrl}/pages`,
  getPagesPreview: `${baseApiUrl}/pages?_publicationState=preview&slug=`,
  get404Page: `${baseApiUrl}/error-page`,
  getGlobal: `${baseApiUrl}/global/info`,
  getPagesSearch: `${baseApiUrl}/pages/search`,
  getHomePage: `${baseApiUrl}/home-page`,
  getSearchPage: `${baseApiUrl}/search-page`,
  getCalenderPage: `${baseApiUrl}/calendar-page`
}

export default apiEndPoints
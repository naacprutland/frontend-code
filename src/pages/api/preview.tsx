// import { fetchApi } from '../../lib/util'
// import strapiApi from '../../lib/strapiApi'


export default async (req, res) => {
  if (
    req.query.secret !== process.env.PREVIEW_SECRET ||
    (req.query.slug != '' && !req.query.slug)
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // const url = `${strapiApi.getPagesPreview}${req.query.slug}`
  // const previewData = await fetchApi(url)
  // const pageData: { path: string } = previewData[0]

  // if (!pageData) {
  //   return res.status(401).json({ message: 'Invalid slug' });
  // }

  res.setPreviewData({});

  res.writeHead(307, {
    Location: req.query.slug,
  });

  res.end();
};
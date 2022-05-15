import { Image } from './generalApi'
import { SEOApi } from './apiSeo'

export interface EventApi {
    id:               number;
    title:            string;
    slug:             string;
    description:      string;
    date:             Date;
    startTime:        string;
    endTime:          string;
    host:             string;
    location:         string;
    rsvp:             string;
    contactPronoun:   string;
    contactFirstName: string;
    contactLastName:  string;
    contactPhone:     string;
    contactEmail:     string;
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    imageAlt:         string;
    image:            Image;
    seo:              SEOApi;
}
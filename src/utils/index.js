const mapPensToExperiments = pen => ({
  id: pen.id,
  title: pen.title,
  details: pen.details.replace(/<[^>]+>/g, ''), // Strip HTML tags
  link: pen.link,
  image: pen.images.large
})

export { mapPensToExperiments }
export { default as pens } from './pens'
export { default as propValidators } from './propValidators'

const mapPensToExperiments = pen => ({
  title: pen.title,
  details: pen.details.replace(/<[^>]+>/g, ''), // Strip HTML tags
  link: pen.link,
  image: pen.images.large
})

export {
  mapPensToExperiments
}

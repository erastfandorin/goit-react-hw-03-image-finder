const BASE_URL = 'https://pixabay.com/api/?';

export default {
  key: '14890929-23ffdef91aab059ee79f68fac',
  perPage: 12,
  imageType: 'photo',
  orientation: 'horizontal',
  page: 1,
  query: '',
  async fatchImages() {
    const requestUrl = `q=${this.query}&page=${this.page}&key=${this.key}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.perPage}`;
    const response = await fetch(BASE_URL + requestUrl);
    const parsedResponse = await response.json();
    const hits = await parsedResponse.hits;
    return { hits };
  },
  searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};

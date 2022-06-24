import axios from 'axios';

class FetchApi {
    constructor(base_url) {
        this.base_url = base_url;
        this._searchQuery = '';
        this._page = 1;
    }

    get searchQuery() {
        return this._searchQuery
    }
    set searchQuery(value) {
        return (this._searchQuery = value);
    }

    get page() {
        return (this._page);
    }

    set page(newPage) {
        return (this._page = newPage);
    }

    async fetchPhotos() {
    axios.defaults.baseURL = this.base_url;
    try {
      const response = await axios.get(
        `?key=23105457-2163ce7f6d7cdb7b080badb2a&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`,
      );
        if (response) { return response.data }
        return Promise.reject(new Error(`Таких картинок нет`))
        
    } catch (err) {
         return `Something went wrong  ${err}`;
    }
    }
    
} 

 

export default FetchApi;
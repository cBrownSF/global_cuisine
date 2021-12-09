import axios from 'axios';

export const getListings = () => {
  return axios.get('/api/listings')
};

export const getListing = id => {
    return axios.get(`/api/listings/${id}`)
}

export const getUserListings = id => {
  return axios.get(`/api/recipes/user/${id}`)
};

export const writeListing = listing => {
  return axios.post('/api/listings/', listing)
}

export const updateListing = listing => {
  debugger;
  return axios.patch(`/api/listings/${listing.editId}/update`,listing)
}

export const deleteListing = id => {
    return axios.delete(`/api/listings/${id}`)
}
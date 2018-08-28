const baseUrl = '/api/v1';
export default{
    base:baseUrl,
    album:baseUrl+'/albums',
    publicAlbums:baseUrl+'/albums/public/?q=True',
    privateAlbums:baseUrl+'/albums/public/q=False',
    brand:baseUrl+'/frontend/brand',
}

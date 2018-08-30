const baseUrl = '/api/v1';
export default{
    base:baseUrl,
    album:baseUrl+'/albums',
    publicAlbums:baseUrl+'/albums/public/?q=True',
    privateAlbums:baseUrl+'/albums/private/?q=True',
    brand:baseUrl+'/frontend/brand',
    navbar:baseUrl+'/frontend/navbaritems',
    contact:baseUrl+'/frontend/personalcontact',
}

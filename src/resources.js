const baseUrl = '/api/v1';
export default{
    base:baseUrl,
    album:baseUrl+'/albums',
    publicAlbums:baseUrl+'/albums/public',
    privateAlbums:baseUrl+'/albums/private',
    brand:baseUrl+'/frontend/brand',
    navbar:baseUrl+'/frontend/navbaritems',
    contact:baseUrl+'/contact',
    sendMessage:baseUrl+'/contact/send',
    login:baseUrl+'/frontend/login/',
    logout:baseUrl+'/frontend/logout/',
    images:baseUrl+'/albums/images',
    imageUpload:baseUrl+'/albums/images/new',
    thumbnails:baseUrl+'/albums/thumbnails',
    createAlbum:baseUrl+'/albums/new/',
    adminMenu:baseUrl+'/frontend/adminmenu',
}

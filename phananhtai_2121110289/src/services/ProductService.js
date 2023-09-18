import httpAxios from "../httpAxios";
function getAll() {
   return httpAxios.get('product/index');
}
function getProductBySlug(slug) {
    return httpAxios.get(`product_detail/${slug}`);
 }
function getById(id) {
    return httpAxios.get(`product/show/${id}`);
}
function create(product) {
    return httpAxios.post('product/store',product);
}
function update(product,id) {
    return httpAxios.post(`product/update/${id}`,product);
}
function remove(id) {
    return httpAxios.delete(`product/destroy/${id}`);
}
function getProductHome(limit,category_id){
    return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductAll(limit,page=1){
    return httpAxios.get(`product_all/${limit}/${page}`);
}
function getProductByCategoryId(category_id,limit){
    return httpAxios.get(`product_category/${category_id}/${limit}`);
}
function getProductByBrandId(brand_id,limit){
    return httpAxios.get(`product_brand/${brand_id}/${limit}`);
}
function getProductSearch(key)
{
    return httpAxios.get(`product_search/${key}`);
}
const productservice={
    getProductSearch:getProductSearch,
    getProductByBrandId:getProductByBrandId,
    getProductByCategoryId:getProductByCategoryId,
    getProductBySlug:getProductBySlug,
    getProductAll:getProductAll,
    getProductHome:getProductHome,
    gettAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default productservice;




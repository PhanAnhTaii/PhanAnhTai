import httpAxios from "../httpAxios";
function getAll() {
   return httpAxios.get('post/index');
}
function getById(id) {
    return httpAxios.get(`post/show/${id}`);
}
function create(post) {
    return httpAxios.post('post/store',post);
}
function update(post,id) {
    return httpAxios.post(`post/update/${id}`,post);
}
function remove(id) {
    return httpAxios.delete(`post/destroy/${id}`);
}
function getByType(type,limit) {
    return httpAxios.get(`post_list/${type}/${limit}`);
}
function getPostHome(limit,topic_id){
    return httpAxios.get(`post_home/${limit}/${topic_id}`);
}
function getPostTopicId(topic_id,limit){
    return httpAxios.get(`post_topic/${topic_id}/${limit}`);
}
function getPostBySlug(slug) {
    return httpAxios.get(`post_detail/${slug}`);
 }
const postservice={
    getPostBySlug:getPostBySlug,
    getPostTopicId:getPostTopicId,
    getPostHome:getPostHome,
    getByType:getByType,
    gettAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default postservice;




import httpAxios from "../httpAxios";
function getAll() {
   return httpAxios.get('policy/index');
}
function getById(id) {
    return httpAxios.get(`policy/show/${id}`);
}
function create(policy) {
    return httpAxios.policy('policy/store',policy);
}
function update(policy,id) {
    return httpAxios.policy(`policy/update/${id}`,policy);
}
function remove(id) {
    return httpAxios.delete(`policy/destroy/${id}`);
}
const policyservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default policyservice;




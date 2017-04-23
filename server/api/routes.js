import { users } from './data.json'
import axios from 'axios';
const LINK = 'http://wndemo1.worldnow.com/story/34484960/be-your-childs-valentine?clienttype=container.json';
// const simplifyUsers = (collection) => collection
//   .map(({ user, seed }) => ({ ...user, seed }))
//   .map(({ email, name, seed, picture }) => ({ email, name, seed, picture }))
const makeRequest = () => {
  return axios.get(LINK).then(data => {
    return data;
  });
};
function routes(router) {
  router.get('/data', (ctx) => {
 // router.get('/data', async (ctx) => {
   // const data = await axios.get(LINK);

   // ctx.body = data.data;

   return makeRequest().then(data => {
     ctx.body = data.data;
   }).catch(err => {
     ctx.status = 500;
     ctx.body = err;
   });
 })
//   router.get('/users', async (ctx) => {
//     ctx.body = simplifyUsers(users.slice(0, 10))
//   })
//
//   router.get('/users/:seed', async (ctx) => {
//     const { seed } = ctx.params
//     const [ result ] = simplifyUsers(users.filter((user) => user.seed === seed))
//
//     if (!result) {
//       ctx.body = { error: { message: 'User not found' } }
//     } else {
//       ctx.body = result
//     }
//   })
}

// can't export directly function, run into const issue
// see: https://phabricator.babeljs.io/T2892
export default routes

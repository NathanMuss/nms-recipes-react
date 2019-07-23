import data from '../data/items.json';

// TODO: Decide if I'm going to support filters for specific types - if not, remove these methods
// export function getCraftedResults(query) {
//   return data.crafted.filter(item => {
//     return item.result.toLowerCase().includes(query.toLowerCase());
//   });
// }

// export function getPortableResults(query) {
//   return data.portable.filter(item => {
//     return item.result.toLowerCase().includes(query.toLowerCase());
//   });
// }

// export function getMediumResults(query) {
//   return data.medium.filter(item => {
//     return item.result.toLowerCase().includes(query.toLowerCase());
//   });
// }

// export function getLargeResults(query) {
//   return data.large.filter(item => {
//     return item.result.toLowerCase().includes(query.toLowerCase());
//   });
// }

export function getAllResults(query) {
  if (query) {
    const keys = Object.keys(data);
    const results = {};
    for (let key in keys) {
      let current = data[keys[key]];
      results[keys[key]] = current.filter((item) => {
        return item.result.toLowerCase().includes(query.toLowerCase());
      });
    }
    return results;
  } else {
    return data;
  }
}
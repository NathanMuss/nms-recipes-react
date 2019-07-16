import data from '../data/items.json';

export function getCraftedResults(query) {
  return data.crafted.filter(item => {
    return item.result.toLowerCase().includes(query.toLowerCase());
  });
}

export function getPortableResults(query) {
  return data.portable.filter(item => {
    return item.result.toLowerCase().includes(query.toLowerCase());
  });
}

export function getMediumResults(query) {
  return data.medium.filter(item => {
    return item.result.toLowerCase().includes(query.toLowerCase());
  });
}

export function getLargeResults(query) {
  return data.large.filter(item => {
    return item.result.toLowerCase().includes(query.toLowerCase());
  });
}
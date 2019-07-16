import data from '../data/items.json';

export function getCraftedResults(query) {
  return data.crafting.filter(item => {
    return item.result.toLowerCase().includes(query.toLowerCase());
  });
}
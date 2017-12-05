import sortBy from 'sort-by';

export default function arrSort(arr, type) {
  if (type === 'latest') {
    arr.sort(sortBy('-timestamp', '-voteScore'));
  } else if (type === 'votes') {
    arr.sort(sortBy('-voteScore', '-timestamp'));
  } else if (type === 'oldest') {
    arr.sort(sortBy('timestamp', '-voteScore'));
  }
}

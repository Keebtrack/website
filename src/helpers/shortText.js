import { take, length } from 'ramda';

export default function shortText(mexLength, text) {
  if (length(text) > mexLength) {
    return `${take(mexLength, text)}..`
  } else {
    return text
  }
}
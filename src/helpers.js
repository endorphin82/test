import { Map, OrderedMap } from "immutable";

export function arrToMap(arr, DataRecord = Map) {
  return arr
    .reduce(
      (acc, item) => acc.set(item.postId, new DataRecord(item)),
      new OrderedMap({})
    );
}

export function mapToArr(obj) {
  return obj.valueSeq().toArray();
}
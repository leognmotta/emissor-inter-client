interface HashMap {
  [key: string]: {};
}

export const hashMapToArray = (hashMap: HashMap) => {
  const keys = Object.keys(hashMap);

  return keys.map((key) => ({
    ...hashMap[key],
  }));
};

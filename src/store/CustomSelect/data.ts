const dataLength = 500;
export let data: { lastName: string; age: number }[] = [];

for (let i = 0; i < dataLength; i += 1) {
  data.push({ lastName: `${i}-age`, age: i });
}

const { main } = require("./main");

describe("เพาเวอร์เซตคือ นำเซตสับเซตทั้งหมดของเซตนั้นมาเขียนรวมกันให้เป็นเซตๆเดียวกัน จงเขียนฟังชั่นก์ที่สร้างเพาเวอร์เซตออกมา ตัวอย่างเช่น เพาเวอร์เซตของ [1, 2, 3] คือ [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]", () => {
  test("ให้อาร์เรย์ของ [1] ควรคืนค่า [[], [1]]", () => {
    const useMainFn = main([1]);
    expect(useMainFn).toContainEqual([]);
    expect(useMainFn).toContainEqual([1]);
  });
  test("ให้อาร์เรย์ของ [1, 2] ควรคืนค่า [[], [1], [2], [1, 2]]", () => {
    const useMainFn = main([1, 2]);
    expect(useMainFn).toContainEqual([]);
    expect(useMainFn).toContainEqual([1]);
    expect(useMainFn).toContainEqual([2]);
    expect(useMainFn).toContainEqual([1, 2]);
  });
  test("ให้อาร์เรย์ของ [1, 2, 3] ควรคืนค่า [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]", () => {
    const useMainFn = main([1, 2, 3]);
    expect(useMainFn).toContainEqual([]);
    expect(useMainFn).toContainEqual([1]);
    expect(useMainFn).toContainEqual([2]);
    expect(useMainFn).toContainEqual([3]);
    expect(useMainFn).toContainEqual([1, 2]);
    expect(useMainFn).toContainEqual([1, 3]);
    expect(useMainFn).toContainEqual([2, 3]);
    expect(useMainFn).toContainEqual([1, 2, 3]);
  });
  test("ให้อาร์เรย์ของ [1, 2, 3, 4] ควรคืนค่า [[] [ 1 ] [ 2 ] [ 1, 2 ] [ 3 ] [ 1, 3 ] [ 2, 3 ] [ 1, 2, 3 ] [ 4 ] [ 1, 4 ] [ 2, 4 ] [ 1, 2, 4 ] [ 3, 4 ] [ 1, 3, 4 ] [ 2, 3, 4 ] [ 1, 2, 3, 4 ]]", () => {
    const useMainFn = main([1, 2, 3, 4]);
    expect(useMainFn).toContainEqual([]);
    expect(useMainFn).toContainEqual([1]);
    expect(useMainFn).toContainEqual([2]);
    expect(useMainFn).toContainEqual([3]);
    expect(useMainFn).toContainEqual([4]);
    expect(useMainFn).toContainEqual([1, 2]);
    expect(useMainFn).toContainEqual([1, 3]);
    expect(useMainFn).toContainEqual([1, 4]);
    expect(useMainFn).toContainEqual([2, 3]);
    expect(useMainFn).toContainEqual([2, 4]);
    expect(useMainFn).toContainEqual([3, 4]);
    expect(useMainFn).toContainEqual([1, 2, 3]);
    expect(useMainFn).toContainEqual([1, 2, 4]);
    expect(useMainFn).toContainEqual([1, 3, 4]);
    expect(useMainFn).toContainEqual([2, 3, 4]);
    expect(useMainFn).toContainEqual([1, 2, 3, 4]);
  });
});

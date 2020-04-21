const { main } = require('./main');
const { Node, insert } = require('./mock');

describe('ให้ root ของ binary search tree ตัวหนึ่งมา จงหา node ที่มีค่าสูงสุดเป็นอันดับสอง', () => {
	test('ให้ node ของเลข 50, 30, 40, 60, 70 และ 30 ควรคืนค่า 60', () => {
		const root = new Node(50);
		insert(root, new Node(30));
		insert(root, new Node(40));
		insert(root, new Node(60));
		insert(root, new Node(70));
		insert(root, new Node(30));
		expect(main(root)).toBe(60)
	});
	test('ให้ node ของเลข 63, 70, 25, 71, และ 33 ควรคืนค่า 70', () => {
		const root = new Node(63);
		insert(root, new Node(70));
		insert(root, new Node(25));
		insert(root, new Node(71));
		insert(root, new Node(33));
		expect(main(root)).toBe(70)
	});
	test('ให้ node ของเลข 92, 98, 47, 73, 57, 69, 71, 52 ,96 และ 44 ควรคืนค่า 96', () => {
		const root = new Node(92);
		insert(root, new Node(98));
		insert(root, new Node(47));
		insert(root, new Node(73));
		insert(root, new Node(57));
		insert(root, new Node(69));
		insert(root, new Node(71));
		insert(root, new Node(52));
		insert(root, new Node(96));
		insert(root, new Node(44));
		expect(main(root)).toBe(96)
	});
	test('ให้ node ของเลข 94, 4, 68, 75, 31, 50 และ 64 ควรคืนค่า 75', () => {
		const root = new Node(94);
		insert(root, new Node(4));
		insert(root, new Node(68));
		insert(root, new Node(75));
		insert(root, new Node(31));
		insert(root, new Node(50));
		insert(root, new Node(64));
		expect(main(root)).toBe(75)
	});
	test('ให้ node ของเลข 9, 13, 98, 11 ควรคืนค่า 13', () => {
		const root = new Node(9);
		insert(root, new Node(13));
		insert(root, new Node(98));
		insert(root, new Node(11));
		expect(main(root)).toBe(13)
	});
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export function flatToTree(
	items: any[],
	uniqueKey = "id",
	pId = "pId",
	childKey = "children"
): any[] {
	const result = []; // 存放结果集

	const itemMap: any = {}; // 存放过程数据

	for (const item of items) {
		if (itemMap[item[uniqueKey]] == null) {
			itemMap[item[uniqueKey]] = {
				[childKey]: [],
			};
		}

		itemMap[item[uniqueKey]] = {
			...item,
			[childKey]: itemMap[item[uniqueKey]][childKey],
		};

		const treeItem = itemMap[item[uniqueKey]];

		Reflect.deleteProperty(treeItem, pId);

		if (item[pId] === 0) {
			result.push(treeItem);
		} else {
			if (itemMap[item[pId]] == null) {
				itemMap[item[pId]] = {
					[childKey]: [],
				};
			}
			itemMap[item[pId]][childKey].push(treeItem);
		}
	}
	return result;
}

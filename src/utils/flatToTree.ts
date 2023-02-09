/* eslint-disable @typescript-eslint/no-explicit-any */
export const nestedToFlat: (
	arr: any[],
	pId?: number | string,
	pKey?: string,
	childKey?: string
) => any[] = (arr, pId = 0, pKey = "id", childKey = "children") => {
	return [].concat(
		...arr.map((item) => {
			const temp = JSON.parse(JSON.stringify(item[childKey]));
            Reflect.deleteProperty(item, childKey)
			return [].concat(
				{ ...item, pId },
				...nestedToFlat(temp, item[pKey], pKey, childKey)
			);
		})
	);
};

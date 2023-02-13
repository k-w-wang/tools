import React from "react";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Link, RouteObject } from "react-router-dom";
import App from "../App";
import { PieChartOutlined } from "@ant-design/icons";
import Debounce from "../page/Debounce";

const TreeToFlat = React.lazy(async () => await import("../page/TreeToFlat"));
const FlatToTree = React.lazy(async () => await import("../page/FlatToTree"));

export const routers: RouteObject[] = [
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: "welcome tools",
			},
			{
				path: "/function",
				children: [
					{
						path: "/function/treetoflat",
						element: <TreeToFlat />,
					},
					{
						path: "/function/flattotree",
						element: <FlatToTree />,
					},
					{
						path: "/function/debounce",
						element: <Debounce />,
					},
				],
			},
		],
	},
];

export const menus: ItemType[] = [
	{
		key: "/",
		label: <Link to="/">Home</Link>,
		icon: <PieChartOutlined />,
	},
	{
		key: "/function",
		label: "Function",
		icon: <PieChartOutlined />,
		children: [
			{
				key: "/function/treetoflat",
				label: <Link to="/function/treetoflat">TreeToFlat</Link>,
			},
			{
				key: "/function/flattotree",
				label: <Link to="/function/flattotree">FlatToTree</Link>,
			},
			{
				key: "/function/debounce",
				label: <Link to="/function/debounce">Debounce</Link>,
			},
		],
	},
];

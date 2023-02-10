import React from "react";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Link, RouteObject } from "react-router-dom";
import App from "../App";
import TreeToFlat from "../page/TreeToFlat";

import { PieChartOutlined } from "@ant-design/icons";
import FlatToTree from "../page/FlatToTree";

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
		],
	},
];

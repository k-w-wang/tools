import React from "react";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Link, RouteObject } from "react-router-dom";
import App from "../App";
import TreeToFlat from "../page/TreeToFlat";

import {
	PieChartOutlined,
  } from '@ant-design/icons';

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
				],
			},
		],
	},
];

export const menus: ItemType[] = [
	{
		key: "1",
		label: <Link to="/">Home</Link>,
		icon: <PieChartOutlined />
	},
	{
		key: "2",
		label: "Function",
		icon: <PieChartOutlined />,
		children: [
			{
				key: "3",
				label: <Link to="/function/treetoflat">TreeToFlat</Link>,
			},
		],
	},
];

import React from "react";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Link, RouteObject } from "react-router-dom";
import App from "../App";
import { PieChartOutlined } from "@ant-design/icons";
import CommentInput from "../page/components/CommentInput";
import ShowComponents from "../page/ShowComponents";

const TreeToFlat = React.lazy(async () => await import("../page/TreeToFlat"));
const FlatToTree = React.lazy(async () => await import("../page/FlatToTree"));
const Debounce = React.lazy(async () => await import("../page/Debounce"));
const Throttle = React.lazy(async () => await import("../page/Throttle"));
const SplitText = React.lazy(async () => await import("../page/SplitText"));
const PdfPreview = React.lazy(async () => await import("../page/PdfPreview"));
const PdfPreviewV2 = React.lazy(
	async () => await import("../page/PdfPreviewV2")
);
const PdfPreviewV3 = React.lazy(
	async () => await import("../page/PdfPreviewV3")
);

const StreamOutput = React.lazy(
	async () => await import("../page/StreamOutput")
);
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
					{
						path: "/function/throttle",
						element: <Throttle />,
					},
				],
			},
			{
				path: "/components",
				children: [
					{
						path: "/components/commentinput",
						element: <CommentInput />,
					},
					{
						path: "/components/showcomponents",
						element: <ShowComponents />,
					},
					// {
					// 	path: "/components/flattotree",
					// 	element: <FlatToTree />,
					// },
					// {
					// 	path: "/components/debounce",
					// 	element: <Debounce />,
					// },
					// {
					// 	path: "/components/throttle",
					// 	element: <Throttle />,
					// },
				],
			},
			{
				path: "/form",
				element: <SplitText />,
			},
			{
				path: "/stream",
				element: <StreamOutput />,
			},
			{
				path: "/pdf",
				element: <PdfPreview />,
			},
			{
				path: "/pdfV2",
				element: <PdfPreviewV2 />,
			},
			{
				path: "/pdfV3",
				element: <PdfPreviewV3 />,
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
			{
				key: "/function/throttle",
				label: <Link to="/function/throttle">Throttle</Link>,
			},
		],
	},
	{
		key: "/components",
		label: "Components",
		icon: <PieChartOutlined />,
		children: [
			{
				key: "/components/commentinput",
				label: <Link to="/components/commentinput">CommentInput</Link>,
			},
			{
				key: "/components/showcomponents",
				label: <Link to="/components/showcomponents">showcomponents</Link>,
			},
			// {
			// 	key: "/components/debounce",
			// 	label: <Link to="/function/debounce">Debounce</Link>,
			// },
			// {
			// 	key: "/components/throttle",
			// 	label: <Link to="/function/throttle">Throttle</Link>,
			// },
		],
	},
	{
		key: "/iframe",
		label: <Link to="/iframe">房屋</Link>,
		icon: <PieChartOutlined />,
	},
	{
		key: "/iframetwo",
		label: <Link to="/iframetwo">居民</Link>,
		icon: <PieChartOutlined />,
	},
	{
		key: "/form",
		label: <Link to="/form">文字裁剪</Link>,
		icon: <PieChartOutlined />,
	},
	{
		key: "/pdf",
		label: <Link to="/pdf">PDF</Link>,
		icon: <PieChartOutlined />,
	},
	{
		key: "/pdfV2",
		label: <Link to="/pdfV2">PDFV2</Link>,
		icon: <PieChartOutlined />,
	},
	{
		key: "/pdfV3",
		label: <Link to="/pdfV3">PDFV3</Link>,
		icon: <PieChartOutlined />,
	},
	{
		key: "/stream",
		label: <Link to="/stream">Stream</Link>,
		icon: <PieChartOutlined />,
	},
];

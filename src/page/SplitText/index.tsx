import React from "react";

import CroppingTextV2 from "../components/CroppingTextV2";
import CroppingTextWapper from "../components/CroppingText";

const Index: React.FC = () => {
	const [contentList, setContentList] = React.useState(["这是一段测试文字！"]);
	const onSplitChange = (newContent: string[], index: number) => {
		setContentList((prevContentList) => {
			prevContentList.splice(index, 1, ...newContent);
			return [...prevContentList];
		});
	};
	return (
		<>
			<h1>V1版本</h1>
			<CroppingTextWapper key={"v1"} content="这是一段测试文字！" />
			<h1>V2版本</h1>
			<div
				key={"v2"}
				style={{ display: "flex", flexDirection: "column", gap: 4 }}
			>
				{contentList.map((item, index) => {
					return (
						<CroppingTextV2
							key={item + index.toString()}
							content={item}
							onSplitChange={(value: string[]) => onSplitChange(value, index)}
						/>
					);
				})}
			</div>
		</>
	);
};
export default Index;

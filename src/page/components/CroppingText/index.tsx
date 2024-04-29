import React, { useState } from "react";
import CroppingText from "../CroppingTextV2";
import "./index.css";

interface IProps {
	content: string;
	className?: string | undefined;
}

export default function CroppingTextWapper({ content, className }: IProps) {
	const [contentList, setContentList] = useState([content]);
	const handleChange = (newList: string[], index: number) => {
		setContentList(() => {
			contentList.splice(index, 1, ...newList);
			return [...contentList];
		});
	};

	return (
		<div
			className={className}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "4px",
			}}
		>
			{contentList.map((item, index) => {
				return (
					<CroppingText
						key={item + index.toString()}
						content={item}
						onSplitChange={(newList) => handleChange(newList, index)}
					/>
				);
			})}
		</div>
	);
}

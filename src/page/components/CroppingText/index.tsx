import React, { useEffect, useRef, useState } from "react";
import { debounce } from "../../../utils/debounce";
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
						onChange={(newList) => handleChange(newList, index)}
					/>
				);
			})}
		</div>
	);
}

interface CroppingTextProps {
	content: string;
	onChange: (contentList: string[]) => void;
}
// CroppingText
// 截断文本
function CroppingText({ content, onChange }: CroppingTextProps) {
	const textRef = useRef<HTMLDivElement>(null);
	const positions = useRef<
		Array<{ left: number; right: number; top: number; bottom: number }>
	>([]).current;
	const [currentIndex, setCurrentIndex] = useState<number | null>(null);

	const [currentMousePosition, setCurrentMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		if (textRef.current == null) return;
		const textNode = document.createTextNode(content);
		textRef.current?.appendChild(textNode); // 确保文本节点已经被添加到DOM中
		// 获取文本节点的位置
		const getPosttions = debounce(
			() => {
				positions.length = 0;
				for (let index = 1; index < textNode.length; index++) {
					const range = document.createRange();
					range.setStart(textNode, index);
					range.setEnd(textNode, index + 1);
					positions.push(range.getBoundingClientRect());
				}
			},
			1000,
			true
		);
		// 监听文本节点的大小变化
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width } = entry.contentRect;
				getPosttions();
				console.log("Element width changed:", width);
			}
		});
		observer.observe(textRef.current);
		return () => observer.disconnect();
	}, [content]);

	// 监听鼠标移动
	useEffect(() => {
		textRef.current?.addEventListener("mousemove", (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		});
		textRef.current?.addEventListener("mouseleave", (e) => {
			setMousePosition({
				x: 0,
				y: 0,
			});
		});
		return () => {
			textRef.current?.removeEventListener("mousemove", () => {
				console.log("remove mousemove");
			});
			textRef.current?.removeEventListener("mouseleave", () => {
				console.log("remove mousemove");
			});
		};
	}, []);

	// 根据鼠标位置判断当前是哪个文本节点
	useEffect(() => {
		if (mousePosition.x === 0 || mousePosition.y === 0) {
			setCurrentIndex(null);
			setCurrentMousePosition({
				x: 0,
				y: 0,
			});
			return;
		}
		positions.forEach((position, index) => {
			if (
				position.left <= mousePosition.x &&
				position.right >= mousePosition.x &&
				position.top <= mousePosition.y &&
				position.bottom >= mousePosition.y
			) {
				setCurrentMousePosition({
					x:
						position.left -
						(textRef.current?.getBoundingClientRect().left ?? 0) -
						2,
					y: position.top - (textRef.current?.getBoundingClientRect().top ?? 0),
				});
				setCurrentIndex(index + 1);
			}
		});
	}, [mousePosition]);

	return (
		<div
			title="点击任意位置拆分"
			className="content"
			style={{
				border: "1px dashed #3c85f0",
				padding: 4,
			}}
			ref={textRef}
			onClick={() => {
				if (currentIndex == null) return;
				const newContent = [
					content.substring(0, currentIndex),
					content.substring(currentIndex),
				];
				onChange(newContent);
			}}
		>
			{currentMousePosition.x !== 0 && currentMousePosition.y !== 0 && (
				<span
					className="content-before"
					style={{ left: currentMousePosition.x, top: currentMousePosition.y }}
				></span>
			)}
		</div>
	);
}

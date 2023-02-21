import React, { ChangeEvent, useMemo, useState } from "react";

import "./commentinput.css";

interface IProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	onPost?: (value: string) => void;
	imgUrl?: string;
}

/**
 * CommentInput 评论输入框,其余参数参考input
 * @param  {function}  onPost 点击post触发的方法
 * @param  {string}  imgUrl 头像的url
 * @returns {FunctionComponent} 返回一个FunctionComponent组件
 */

const CommentInput: React.FC<IProps> = ({ onPost, imgUrl, ...props }) => {
	// 样式
	const [className, setClassName] = useState<string>("comment-input");

	// 存储value的值
	const [value, setValue] = useState<string>("");
	// 获取焦点改变classname
	const onFocus: () => void = () => {
		setClassName("comment-input comment-input-focus");
	};
	// 失去焦点改变classname
	const onBlur: () => void = () => {
		setClassName("comment-input");
	};

	// input输入改变时
	const onChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
		setValue(e.target.value);
	};

	// Post按钮点击时触发
	const onClick: () => void = () => {
		if (typeof onPost !== "function") return;
		onPost(value);
	};

	// post是否可点
	const disabled = useMemo(() => value === "", [value]);

	return (
		<span className={className}>
			{imgUrl != null && imgUrl !== "" ? (
				<img className="input-prefix" src={imgUrl} />
			) : (
				<></>
			)}
			<input
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={(e) => onChange(e)}
				type="text"
				{...props}
			/>
			<button disabled={disabled} onClick={onClick}>
				Post
			</button>
		</span>
	);
};
export default CommentInput;

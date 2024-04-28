import React from "react";

import CroppingTextWapper from "../components/CroppingText";

const Index: React.FC = () => {
	// const positions = useRef<any[]>([]).current;

	// const [ currentMousePosition, setCurrentMousePosition ] = useState({
	// 	x: 0,
	// 	y: 0,
	// })

	// const [ mousePosition, setMousePosition ] = useState(
	// 	{
	// 	    x: 0,
	// 	    y: 0,
	// 	}
	// )

	// useEffect(()=>{
	// 	const text = 'Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!'
	// 	const textNode = document.createTextNode(text);
	//   	document.getElementById('text').appendChild(textNode); // 确保文本节点已经被添加到DOM中

	// 	// // 获取文本节点的范围
	// 	// while(textNode.length !== 0) {
	// 	// 	const newText = textNode.splitText(1);
	// 	// 	const range = document.createRange();
	// 	// 	range.setStart(textNode, 0);
	// 	// 	range.setEnd(textNode, 1);
	// 	// 	positions.push(range.getBoundingClientRect());
	// 	// 	textNode = newText
	// 	// }
	// 	// document.getElementById('text').normalize()
	// 	for (let index = 1; index < textNode.length; index++) {
	// 			const range = document.createRange();
	// 			range.setStart(textNode, index);
	// 			range.setEnd(textNode, index + 1);
	// 			positions.push(range.getBoundingClientRect());
	// 	}
	// 	console.log(positions);
	// }, [])

	// useEffect(()=>{
	// 	document.getElementById('text')?.addEventListener('mousemove', (e)=>{
	// 		setMousePosition({
	// 		    x: e.clientX,
	// 		    y: e.clientY,
	// 		})
	// 	})
	// 	return ()=>{
	// 		return document.getElementById('text')?.removeEventListener('mousemove', ()=>{
	// 		    console.log('remove mousemove');
	// 		})
	// 	}
	// }, [])

	// useEffect(()=> {
	// 	positions.forEach((position, index)=>{
	// 	    if (position.left <= mousePosition.x && position.right >= mousePosition.x && position.top <= mousePosition.y && position.bottom >= mousePosition.y) {
	// 	        console.log(`Character ${index} is hovered`);
	// 			const text = document.getElementById('text');
	// 			text?.setAttribute('data-left', position.left)
	// 			setCurrentMousePosition({
	// 			    x: position.left - text?.getBoundingClientRect().left -2,
	// 			    y: position.top - text?.getBoundingClientRect().top,
	// 			})
	// 	    }
	// 	})
	// }, [mousePosition])

	return (
		// <div id="text" data-left={0} >
		// 	<span style={{left: currentMousePosition.x, top: currentMousePosition.y}}></span>
		// </div>
		<CroppingTextWapper
			content={`这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！`}
		/>
	);
};
export default Index;

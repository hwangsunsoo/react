import React, { Component } from 'react';

class App extends Component {
	render() {
		const name = 'sunsoo';
		const value = 1;
		const style = {
			backgroundColor: 'black',
			padding: '16px',
			color: 'white',
			fontSize: '12px'
		};
		return (
			<div>
				{ /* 주석은 이렇게 */ }
				hello {name}!
				<div>
					{
						1 + 1 === 2
						? (<div>맞아요!</div>)
						: (<div>틀려요!</div>)
					}
				</div>
				<div>
					{
						(() => {
							if (value === 1) return (<div>1하나</div>);
							if (value === 2) return (<div>2둘</div>);
							if (value === 3) return (<div>3셋</div>);
						})()
					}
				</div>
				<div style={style}>
					hi {name}!
				</div>
				<MyName name="황선수" age="31" />
			</div>
		);
	}
}

class MyName extends Component {
	render() {
		return (
			<div>
				안녕하세요! 제 이름은 <strong>{this.props.name}</strong> 입니다.<br />
				<strong>{this.props.age}</strong>세 입니다.
			</div>
		);
	}
}

MyName.defaultProps = {
	name: '기본이름',
	age: '?',
}

export default App;

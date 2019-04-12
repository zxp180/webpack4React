/*
 * @Author: super
 * @Date: 2019-04-11 17:32:02
 * @Last Modified by: super
 * @Last Modified time: 2019-04-12 17:23:05
 */
/**
 * PropTypes 用于类型判断错误提示, styled-components 组件样式处理
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

@inject('globalState')
@observer
class Blog extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return <div>{this.props.title}</div>;
    }
}

Blog.propTypes = {
    title: PropTypes.number,
};

@inject('globalState')
@observer
class AboutMe extends Component {
    render() {
        const Title = styled.h1`
            font-size: 1.5em;
            text-align: center;
            color: palevioletred;
        `;
        return (
            <div>
                <Title>{this.props.globalState.title}</Title>

                <h2>Front-End engineer</h2>
                <h3>Graduated from South China Agricultural University</h3>
                <h3>Expert in javascript react vue weapp and so on!</h3>
                <h3>The following are the details:</h3>
                <p className="link">
                    <a href="https://juejin.im/user/5af17df4518825672a02e1f5">
                        juejin
                    </a>
                    <a href="https://blog.csdn.net/weixin_38788347">CSDN</a>
                    <a href="https://github.com/zxpsuper">github</a>
                    <a href="https://zxpsuper.github.io/">Blog</a>
                </p>

                <Blog title="my blog: https://zxpsuper.github.io" />

                <div>
                    <p>You clicked {this.props.globalState.clickTime} times</p>
                    <button
                        onClick={() => this.props.globalState.addClickTime()}
                    >
                        Click me
                    </button>
                </div>
            </div>
        );
    }
}

export default AboutMe;
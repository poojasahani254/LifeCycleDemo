import React,{Component} from 'react';
import {Text,
    View
} from 'react-native';
export default class LifeCycleEX extends Component{
    constructor() {
        super();
        this.state={
            str:'hello',
            hasError: false
        }
    }
    componentWillMount(): void {
        debugger
        console.log('componentWillMount')
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
    }
    componentDidMount(): void {
        debugger
        console.log('componentDidMount');

    }
    render(){
        return(
            <View><Text>Hello</Text></View>
        );
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        debugger
        console.log('componentDidUpdate hfgh');
    }
    componentWillUnmount(): void {
        debugger
        console.log('componentWillUnmount');
    }


    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        debugger
        console.log('shouldComponentUpdate');
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        debugger
        console.log('componentDidCatch');
        logComponentStackToMyService(info.componentStack);
    }

}

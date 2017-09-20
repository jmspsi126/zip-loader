import React from 'react'
import ReactDOM from 'react-dom'
import YinYangIcon from '../icons.zip?file=yin-yang-source.svg'

export default class SubUsage extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <YinYangIcon/>
        </div>
    }
}

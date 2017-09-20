import React from 'react';
import ReactDOM from 'react-dom';
import YinYangIcon from '../icons.zip?file=yin-yang-source.svg'
import SubUsage from './sub'

export default function Boot(App){

    if(App.basename){
        window.basename = App.basename;
    }
    
    var store = create(reducers, window.__INITIAL_STATE__ || {});

    

}


ReactDOM.render(
    <div>
        <YinYangIcon/>
        <SubUsage/>
    </div>
    ,document.getElementById('root')
);
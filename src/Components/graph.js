import React, { Component } from 'react';
import {ForceGraph2D} from 'react-force-graph';

import {myData} from '../data'
import './graph.css'

console.log(myData)



export class Graph extends Component {
    
    render() {
        return (
            <div>
                <ForceGraph2D graphData={myData} />            </div>
        )
    }
}

export default Graph

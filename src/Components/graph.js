import React, { Component, useRef } from 'react';
import {ForceGraph2D} from 'react-force-graph';
import { ForceGraph3D} from 'react-force-graph';


import {myData} from '../data'
import './graph.css'

console.log(myData)

export class Graph extends Component {
    
    render() {
        // return (
        //     <div>
        //         <ForceGraph3D graphData={myData} />            </div>
        // )
        return <ForceGraph3D
        // ref={fgRef}
        graphData={myData}
        nodeLabel="id"
        nodeAutoColorBy="group" 
        nodeRelSize="8"
        nodeResolution="12"
        linkOpacity="0.5"
        linkResolution="10"  
       
        />;
        };
}



export default Graph


// export const Graph = ()=>{
//   const fgRef = useRef();
//   return(
//     <ForceGraph2D
//       // width='250px'
//       // height='250px'
//       graphData={myData}
    
//     />
//   )
// }

// export default Graph;
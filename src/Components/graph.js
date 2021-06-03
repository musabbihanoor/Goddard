import React, { Component } from 'react';
// import {ForceGraph2D} from 'react-force-graph';

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
        nodeRelSize="10"
        nodeResolution="10"
        linkOpacity="0.5"
        linkResolution="8"
      />;
    }
}

export default Graph


{/* <head>
  <style> body { margin: 0; } </style>

  <script src="//unpkg.com/react/umd/react.production.min.js"></script>
  <script src="//unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
  <script src="//unpkg.com/babel-standalone"></script>

  <script src="//unpkg.com/react-force-graph-3d"></script>
  <!--<script src="../../src/packages/react-force-graph-3d/dist/react-force-graph-3d.js"></script>-->
</head>

<body>
  <div id="graph"></div>

  <script>
    UnrealBloomPassPromise = import('//cdn.skypack.dev/three/examples/jsm/postprocessing/UnrealBloomPass.js')
      .then(m => m.UnrealBloomPass);
  </script>

  <script type="text/jsx">
    UnrealBloomPassPromise.then(UnrealBloomPass => {
      const { useRef, useEffect } = React;

      fetch('../datasets/miserables.json').then(res => res.json()).then(data => {
        const FocusGraph = () => {
          const fgRef = useRef();

          useEffect(() => {
            const bloomPass = new UnrealBloomPass();
            bloomPass.strength = 1;
            bloomPass.radius = 1;
            bloomPass.threshold = 0.2;
            fgRef.current.postProcessingComposer().addPass(bloomPass);
          }, []);

          return <ForceGraph3D
            ref={fgRef}
            graphData={data}
            nodeLabel="id"
            nodeAutoColorBy="group" 
            nodeRelSize="8"
            nodeResolution="12"
            linkOpacity="0.5"
            linkResolution="10"
          />;
        };

        ReactDOM.render(
          <FocusGraph/>,
          document.getElementById('graph')
        );
      });
    });
  </script>
</body> */}
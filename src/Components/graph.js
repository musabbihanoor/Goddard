import React, { Component, useRef, useContext } from "react";
import { ForceGraph2D } from "react-force-graph";
import { ForceGraph3D } from "react-force-graph";

import { AppContext } from "../context & Reducers/appContext";

// import { myData } from "../data";
import { myData } from "../data1";
import "./graph.css";

const Graph = (props) => {
  let { addNodeData } = useContext(AppContext);

  function nodeClick(node, space, txt) {
    // console.log("This is Node ID : " + node.id);
    addNodeData({
      data: node,
      id: node.id,
    });
  }

  const allNodesid = myData.nodes.map((node) => {
    return node.id;
  });

  function trigUpdate(node) {
    props.dtlUpdate(node);
  }

  return (
    <ForceGraph3D
      // ref={fgRef}
      // nodeId={"Napoleon"}
      //   onNodeClick={(node, e) => nodeClick(node)}
      width={800}
      height={540}
      onNodeClick={(node, e) => trigUpdate(node)}
      graphData={myData}
      nodeLabel='id'
      nodeAutoColorBy='group'
      nodeRelSize={8}
      nodeResolution={12}
      linkOpacity={0.5}
    />
  );
};

export default Graph;

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

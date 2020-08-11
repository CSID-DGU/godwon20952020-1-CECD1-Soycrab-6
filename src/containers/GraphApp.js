import React from 'react';
import { Graph } from 'react-d3-graph';
import { useSelector } from 'react-redux';
import Node from '../components/Node';

const graphConfig = {
  directed: true,
  highlightOpacity: 0,
  linkHighlightBehavior: true,
  width: 1500,
  height: 1000,
  d3: {
    alphaTarget: 0.05,
    gravity: 100,
    linkLength: 500,
    linkStrength: 0.1,
    disableLinkForce: false
  },
  node: {
    size: 1500,
    renderLabel: false,
    viewGenerator: node => {
      return (
        <Node node={node} />
      );
    }
  },
  link: {
    color: '#69db7c',
    highlightColor: '#b7dc95',
    markerWidth: 6,
    strokeWidth: 5,
    fontSize: 15,
    highlightFontSize: 17,
    highlightFontWeight: 'bold',
  }
};

function GraphApp() {
  const nodes = useSelector(state => state.nodes.nodes);
  const edges = useSelector(state => state.nodes.edges);

  return (
    <Graph
      id="graph-id"
      data={{
        nodes: nodes,
        links: edges
      }}
      config={graphConfig}
    />
  );
};

export default React.memo(GraphApp);

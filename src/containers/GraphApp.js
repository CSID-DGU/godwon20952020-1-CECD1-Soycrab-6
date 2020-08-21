import React, { useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import { useSelector, useDispatch } from 'react-redux';
import Node from '../components/Node';
import { getDatas } from '../modules/datas';
import StateRender from '../components/shared/StateRender';
import { useHistory } from 'react-router-dom';

export const graphConfig = {
  directed: true,
  highlightOpacity: 0,
  linkHighlightBehavior: true,
  width: 1500,
  height: 1000,
  d3: {
    alphaTarget: 0.05,
    gravity: 100,
    linkLength: 650,
    linkStrength: 0.1,
    disableLinkForce: false
  },
  node: {
    size: {
      height: 1500,
      width: 3000,
    },
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
    markerId: 'marker-large',
    fontSize: 15,
    highlightFontSize: 17,
    highlightFontWeight: 'bold',
    renderLabel: true,
    labelProperty: edge => {
      return edge.productPrefix;
    }
  }
};

function GraphApp() {
  const { data, loading, error } = useSelector(state => state.datas.datas);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLink = function(source, target) {
    history.push(`/edges/edit/${source}/${target}`);
  };

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  if (loading || !data || error) {
    return <StateRender 
              loading={loading} 
              data={data} 
              error={error} />;
  } else {
    return (
      <Graph
        id="graph-id"
        data={data}
        config={graphConfig}
        onClickLink={onClickLink}
      />
    )
  };
};

export default React.memo(GraphApp);

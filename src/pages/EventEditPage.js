import React from 'react';
import EventEditContainer from '../containers/EventEditContainer';

function EventEditPage({ match }) {
  const { id, parType, parId } = match.params;
  const eventId = parseInt(id, 10);
  const parentId = parseInt(parId, 10);

  return (
    <EventEditContainer
      realId={eventId}
      parentId={parentId}
      parentType={parType}
    />
  );
};

export default EventEditPage;
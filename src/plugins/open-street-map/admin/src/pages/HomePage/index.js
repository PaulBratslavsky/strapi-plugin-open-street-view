/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
import MapComponent from '../../components/MapComponent';
import OpenStreetMapInput from '../../components/OpenStreetMapInput';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
  position: relative;
`;

// import MapModal from '../../components/MapModal';
// import pluginId from '../../pluginId';

const INITIAL_MARKER = {
  "lat": 40.708428035070426,
  "lng": -73.99177120258095
}

const HomePage = () => {
  const [marker, setMarker] = useState();

  return (
    <HomePageWrapper>
      <MapComponent marker={marker} setMarker={setMarker} />
      <OpenStreetMapInput marker={marker} /> 
      {/* {marker && <MapModal marker={marker} setMarker={setMarker} />} */}
    </HomePageWrapper>
  );
};

export default HomePage;

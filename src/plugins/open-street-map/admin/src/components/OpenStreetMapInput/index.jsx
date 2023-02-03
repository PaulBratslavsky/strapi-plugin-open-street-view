import React from "react";
import { JSONInput } from "@strapi/design-system";

import styled from "styled-components";

const JSONInputWrapper = styled(JSONInput)`
  width: 100%;
  /* position: absolute;
  left: 1rem;
  bottom: 1rem; */
  cursor: default;
`;

export default function OpenStreetMapInput({
  marker,
  value,
  name,
}) {
  return (
    <JSONInputWrapper
      name={name}
      value={JSON.stringify(marker) || value}
      disabled
    />
  );
}

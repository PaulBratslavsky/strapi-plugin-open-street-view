import React from "react";
import { ModalLayout, ModalBody, ModalHeader, ModalFooter, Typography, Box, Button } from '@strapi/design-system';

export default function MapModal({setMarker, marker}) {
  console.log(marker)
  return (
    <ModalLayout onClose={() => setMarker(undefined)} labelledBy="title">
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Save Location
        </Typography>
      </ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter
        startActions={
          <Button onClick={() => setMarker(undefined)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={
          <>
            <Button onClick={() => setMarker(undefined)}>Save</Button>
          </>
        }
      />
    </ModalLayout>
  );
}

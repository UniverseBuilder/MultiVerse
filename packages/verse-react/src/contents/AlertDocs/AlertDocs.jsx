import React from 'react';

import { Alert } from 'components/Alert';

export const AlertDocs = () => {
  return (
    <div>
      <Alert className="m-x-8" message="Primary Alert" type="primary" />
      <Alert className="m-x-8" message="Secondary Alert" type="secondary" />
      <Alert className="m-x-8" message="Success Alert" type="success" />
      <Alert className="m-x-8" message="Warning Alert" type="warning" />
      <Alert className="m-x-8" message="Error Alert" type="error" />
      <Alert className="m-x-8" message="Info Alert" type="info" />
      <Alert
        className="m-x-8"
        message="Primary Outline Alert"
        type="primary-outline"
      />
      <Alert
        className="m-x-8"
        message="Secondary Outline Alert"
        type="secondary-outline"
      />
      <Alert
        className="m-x-8"
        message="Success Outline Alert"
        type="success-outline"
      />
      <Alert
        className="m-x-8"
        message="Warning Outline Alert"
        type="warning-outline"
      />
      <Alert
        className="m-x-8"
        message="Error Outline Alert"
        type="error-outline"
      />
      <Alert
        className="m-x-8"
        message="Info Outline Alert"
        type="info-outline"
      />
    </div>
  );
};

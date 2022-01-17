import React from 'react';

import { Alert } from 'components/Alert';

export const AlertDocs = () => {
  return (
    <div>
      <Alert message="Primary Alert" type="primary" className="m-x-8" />
      <Alert message="Secondary Alert" type="secondary" className="m-x-8" />
      <Alert message="Success Alert" type="success" className="m-x-8" />
      <Alert message="Warning Alert" type="warning" className="m-x-8" />
      <Alert message="Error Alert" type="error" className="m-x-8" />
      <Alert message="Info Alert" type="info" className="m-x-8" />
      <Alert
        message="Primary Outline Alert"
        type="primary-outline"
        className="m-x-8"
      />
      <Alert
        message="Secondary Outline Alert"
        type="secondary-outline"
        className="m-x-8"
      />
      <Alert
        message="Success Outline Alert"
        type="success-outline"
        className="m-x-8"
      />
      <Alert
        message="Warning Outline Alert"
        type="warning-outline"
        className="m-x-8"
      />
      <Alert
        message="Error Outline Alert"
        type="error-outline"
        className="m-x-8"
      />
      <Alert
        message="Info Outline Alert"
        type="info-outline"
        className="m-x-8"
      />
    </div>
  );
};

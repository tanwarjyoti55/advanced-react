import axios from "axios";
import { useState, useEffect } from "react";

export const includeUpdatableUser = (Component, resourceUrl, resourceName) => {
  return (props) => {
    const [initialResource, setInitialResource] = useState(null);
    const [resource, setResource] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChange = (updates) => {
      setResource({ ...resource, ...updates });
    };

    const onPost = async () => {
      const response = await axios.post(resourceUrl, {
        [resourceName]: resource,
      });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onReset = () => {
      setResource(initialResource);
    };

    return (
      <Component
        {...props}
        user={user}
        onChange={onChange}
        onPost={onPost}
        onReset={onReset}
      />
    );
  };
};

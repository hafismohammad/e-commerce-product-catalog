const HTTP_statusCode = {
    OK: 200,                         // Request succeeded
    CREATED: 201,                   // Resource successfully created
    NO_CONTENT: 204,                // Request succeeded, no content returned
    MOVED_PERMANENTLY: 301,         // Resource moved permanently
    NOT_MODIFIED: 304,              // Resource not modified
    BAD_REQUEST: 400,               // Client error
    UNAUTHORIZED: 401,              // Authentication required
    FORBIDDEN: 403,                 // Authenticated but no access
    NOT_FOUND: 404,                 // Resource not found
    CONFLICT: 409,                  // Conflict, e.g. duplicate data
    GONE: 410,                      // Resource no longer available
    INTERNAL_SERVER_ERROR: 500,     // Server error
    SERVICE_UNAVAILABLE: 503        // Server down or overloaded
  };
  
  Object.freeze(HTTP_statusCode);
  
  export default HTTP_statusCode;
  
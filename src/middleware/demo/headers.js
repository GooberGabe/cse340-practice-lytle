export const addDemoHeaders = (res, req, next) => {
    res.setHeader('X-Demo-Page', true);
    res.setHeader('X-Middleware-Demo', 'This is a middleware demo header');
    next();
}
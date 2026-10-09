// The only file that reads process.env. Everything else imports `config`


const config=Object.freeze({
    env:process.env.NODE_ENV ?? 'development',
    port:Number(process.env.PORT ?? 3000),
    serviceName:process.env.SERVICE_NAME ?? 'catalog-service',
});
// ?? is the nullish coalescing operator (ES2020): use the right side only if the left is null or undefined.
export default config;

// Object.freeze stops anyone from accidentally changing config at runtime.
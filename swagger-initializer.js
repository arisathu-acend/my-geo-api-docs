window.ui = SwaggerUIBundle({
  url: "./geo-admin-api-swagger.yaml",
  dom_id: "#swagger-ui",
  deepLinking: true,
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIBundle.SwaggerUIStandalonePreset
  ],
  layout: "StandaloneLayout"
});

import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "2da18527-ef8b-47a7-a994-f0cf3a22671d",
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "category",
        label: "Categories",
        path: "content/categories",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Category Name",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "products",
            label: "Products",
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "ID",
                required: true,
              },
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Short Description",
                required: true,
              },
              {
                type: "rich-text",
                name: "longDescription",
                label: "Long Description",
              },
              {
                type: "number",
                name: "price",
                label: "Price",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "boolean",
                name: "hasMessageInput",
                label: "Show Message Input",
              },
              {
                type: "boolean",
                name: "hasNameFields",
                label: "Show Name Fields",
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import imageUrlBuider from "@sanity/image-url";

const projectId = import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_REACT_APP_SANITY_TOKEN;

export const client = createClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2023-06-01",
  useCdn: "true",
  token: token,
});

const builder = imageUrlBuider(client);

export const urlFor = (source) => builder.image(source);

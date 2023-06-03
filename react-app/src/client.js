// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import imageUrlBuider from "@sanity/image-url";

const projectId = "nwmtme0z";
const token =
  "skzuuhamqZtaEimy7do4qLv5js7WYLmrYR969wdEkf5g7fIzdvx9dhzKrGnkZAarII7FfzC2r3v35hSCUPH2tT5OoNOA27npmlL8NRzKZhFapuRvrcOmoQPPASCr4asNnncx5jCMEUevcPHPgDrfo2LNDzBHrrDAFhPNortArIEwT6ItqAgj";

export const client = createClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2023-06-01",
  useCdn: "true",
  token: token,
});

const builder = imageUrlBuider(client);

export const urlFor = (source) => builder.image(source);

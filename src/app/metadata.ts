import { getMetadata } from "./lib/getMetadata";

export async function generateMetadata() {
  const metadata = await getMetadata();

  return metadata;
}

import { Page, Text } from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <Page>
      <Text variant="headingLg" as="h1">
        Coes Note App
      </Text>
      <Text variant="bodyMd" as="p">
        Welcome to Coes Note App.
      </Text>
    </Page>
  );
}

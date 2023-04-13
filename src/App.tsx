import type { ChangeEvent } from "react";
import { MantineProvider, Container, Stack, TextInput } from "@mantine/core";
import { Video } from "./Video";
import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");
  const isURL =
    url.startsWith("https://") && !!url.match(/.(mp4|ts|webm|flv)$/);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Stack h="100vh" justify="center">
          <TextInput
            label="Video URL"
            value={url}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUrl(e.currentTarget.value)
            }
          />
          <div>{isURL && <Video url={url} />}</div>
        </Stack>
      </Container>
    </MantineProvider>
  );
}

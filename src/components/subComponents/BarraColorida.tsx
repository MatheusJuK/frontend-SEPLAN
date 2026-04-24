import { Box } from "@mantine/core";

export function BarraColorida() {
  return (
    <Box w="100%">
      <div className="flex h-3 w-full">
        <div className="h-full flex-1 bg-[#F7B500]" />
        <div className="h-full flex-1 bg-[#E6392E]" />
        <div className="h-full flex-1 bg-[#0D7138]" />
      </div>
    </Box>
  );
}

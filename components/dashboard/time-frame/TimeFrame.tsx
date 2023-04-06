import { Button, Flex } from "@chakra-ui/react";
import { TimeRange } from "./constants";
import { FC, useState } from "react";
import { TimeFrameProps } from "./types";

export const TimeFrame: FC<TimeFrameProps> = ({ onClicked }) => {
  const [selected, setSelected] = useState({
    label: "All Time",
    value: "all-time",
  });

  return (
    <Flex mt="3rem" gap="2.8rem" flexWrap="wrap">
      {TimeRange.map(({ label, value }) => (
        <Button
          variant="unstyled"
          key={label}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          textTransform="capitalize"
          borderColor={
            selected.value === value ? "_primary.100" : "_accent.400"
          }
          backgroundColor={
            selected.value === value ? "  _highlight.600" : "transparent"
          }
          color={selected.value === value ? "_primary.100" : "_accent.300"}
          rounded="full"
          py="2rem"
          px="1.8rem"
          fontSize="1.4rem"
          _hover={{
            color: selected.value === value ? "_primary.100" : "_accent.200",
          }}
          onClick={() => {
            setSelected({ label, value });
            onClicked && onClicked({ label, value });
          }}
        >
          {label}
        </Button>
      ))}
      <Button
        variant="unstyled"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textTransform="capitalize"
        border="1px solid"
        rounded="full"
        py="2rem"
        px="1.8rem"
        fontSize="1.4rem"
        borderColor={
          selected.value === "custom-date" ? "_primary.100" : "_accent.400"
        }
        backgroundColor={
          selected.value === "custom-date" ? "  _highlight.600" : "transparent"
        }
        color={
          selected.value === "custom-date" ? "_primary.100" : "_accent.300"
        }
        _hover={{
          color:
            selected.value === "custom-date" ? "_primary.100" : "_accent.200",
        }}
        onClick={() => {
          setSelected({ label: "Custom date", value: "custom-date" });
          onClicked &&
            onClicked({ label: "Custom date", value: "custom-date" });
        }}
      >
        Custom Date
      </Button>
    </Flex>
  );
};

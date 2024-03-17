import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const Ionicon = ({ name, size = 25, color = "black" }: Props) => {
  return <Ionicons name={name} size={size} color={color} />;
};

import { createFileRoute } from "@tanstack/react-router";
import { CampusApp } from "@/campus/app";

export const Route = createFileRoute("/")({
  component: CampusApp,
});

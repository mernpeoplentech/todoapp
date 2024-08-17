import Container from "@/components/Container";
import InputForm from "@/components/InputForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home | Todo Application",
};

const HomePage = () => {
  return (
    <div>
      <Container>
        <h2 className="text-2xl font-semibold underline underline-offset-2 decoration-[1px]">
          Todo Home page
        </h2>
        <InputForm />
      </Container>
    </div>
  );
};

export default HomePage;

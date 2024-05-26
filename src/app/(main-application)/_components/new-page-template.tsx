import { SectionContainer } from "@/components/section-container";
import React from "react";

export const NewPageTemplate = () => {
  return (
    <SectionContainer className="">
      <div className="flex flex-col gap-8 w-full h-full">
        {/* options bar */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <p>Expand</p>
            <p>Added to</p>
          </div>
          <div className="flex gap-2">
            <p>Share</p>
            <p>Settings</p>
            <p>Favorites</p>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Unititled</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            minus quaerat culpa eos maiores ea cum laborum ex dolorum, molestiae
            libero, omnis tenetur doloribus ad, earum aut eum officiis
            aspernatur adipisci similique sint nostrum exercitationem ut ipsa.
            Itaque, ut. Voluptate?
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

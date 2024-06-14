import { check2, grid, loading1 } from "../../img";
import { WobbleCard } from "../../utils/ui/wobble-card";
import Button from "../Button";
import Heading from "../Heading";
import { Section } from "../Section";
import TagLine from "../TagLine";
import { roadmapList } from "./RoadmapList";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
  <div className="container md:pb-10">
    <Heading tag="Ready to get started" title="Project" />

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 md:pb-[7rem]">
      {roadmapList.map((item) => {
        const status = item.status === "done" ? "Done" : "In progress";

        return (
          <WobbleCard
            containerClassName="h-full min-h-[500px] md:min-h-[300px]"
            className="rounded-2xl py-8"
            key={item.id}
          >
            <div className="relative p-8 bg-n-8 rounded-2xl overflow-hidden xl:p-15">
              <div className="relative z-1">
                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                  <TagLine>{item.date}</TagLine>
                  <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                    <img
                      className="mr-2.5"
                      src={item.status === "done" ? check2 : loading1}
                      width={16}
                      height={16}
                      alt={status}
                    />
                    <div className="tagline">{status}</div>
                  </div>
                </div>
                <div className="mb-10 -my-10 -mx-15">
                  <img
                    className="w-full"
                    src={item.imageUrl}
                    width={628}
                    height={426}
                    alt={item.title}
                  />
                </div>
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4">{item.text}</p>
              </div>
            </div>
          </WobbleCard>
        );
      })}
    </div>

    <div className="flex justify-center">
      <Button href="/roadmap">TOP</Button>
    </div>
  </div>
</Section>
);

export default Roadmap;

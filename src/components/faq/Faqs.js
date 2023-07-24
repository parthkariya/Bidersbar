import { React, useEffect } from "react";
import FAQ from "./FAQ";

const questions = [
  {
    id: 1,
    question: "Is the Bidding process Free?",
    answer:
      "No, you’ll have to pay a nominal amount of Rs. 10 to participate in the bidding process.",
  },
  {
    id: 2,
    question: "What is Bidder’s bar?",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 3,
    question: "Do I have to pay the amount while bidding?",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  // {
  //   id: 4,
  //   question: "Search on your phone or tablet",
  //   answer:
  //     "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  // },
];

const Faqs = () => {
  useEffect(() => {
    // console.log("qution", questions);
  }, []);

  return (
    <div>
      <FAQ questions={questions} />
    </div>
  );
};

export default Faqs;

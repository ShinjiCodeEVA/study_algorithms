import FieldWrapper from "../../../components/Form/FieldWrapper";
import { InputField } from "../../../components/Form";
import { TextArea } from "../../../components/Form";
import { useReducer } from "react";
import { useCreateEntry } from "../hooks";

const initialState = {
  title: "",
  tags: "",
  readtime: "",
  description: "",
  platform: "",
  solutionExplanation: "",
  testcase1Input: "",
  testcase1Output: "",
  testcase1Explanation: "",
  testcase2Input: "",
  testcase2Output: "",
  testcase2Explanation: "",
  bruteForceHeading: "",
  bruteForceSteps: "",
  bruteForceSummary: "",
  bruteForceImage: "",
  efficientHeading: "",
  efficientSteps: "",
  efficientSummary: "",
  efficientImage: "",
  replit: ""
  // Add other fields here
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {...state, [action.field]: action.value}
      break
    default:
      return state;
  }
}

export const EntryCreation = () => { 
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const [createEntry] = useCreateEntry()

  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);

    const entry = {
      title: state.title,
      tags: state.tags,
      readTime: state.readTime,
      description: state.description,
      platform: state.platform,
      solutionExplanation: state.solutionExplanation,
      testcase: JSON.stringify([
        {
          input: state.testCase1Input,
          output: state.testCase1Output,
          explanation: state.testCase1Explanation,
        },
        {
          input: state.testCase2Input, 
          output: state.testCase2Output,
          explanation: state.testCase2Explanation,
        }
      ]),
      bruteForceHeading: state.bruteForceHeading,
      bruteForceSteps: JSON.stringify(state.bruteForceSteps.split('\n')),
      bruteForceSummary: state.bruteForceSummary,
      bruteForceImage: state.bruteForceImage,

      efficientHeading: state.efficientHeading,
      efficientSteps: JSON.stringify(state.efficientSteps.split('\n')),
      efficientSummary: state.efficientSummary,
      efficientImage: state.efficientImage,

      replit: state.replit
    }

    console.log(entry)
    createEntry(entry)
  }

  return (
    <div className="px-9 pb-4 mt-4 w-full">
      <div className="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          perferendis sunt temporibus rem eum debitis iste, suscipit aliquam
          laboriosam quod tempore aspernatur nam autem at sequi, labore pariatur
          ipsum. Quas.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <FieldWrapper>
          <div className="flex flex-col w-full">
            <InputField
              placeholder={"Title"}
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <InputField
              placeholder={"Tags"}
              onChange={(e) => handleChange("tags", e.target.value)}
            />
            <InputField
              placeholder={"Readtime"}
              onChange={(e) => handleChange("readTime", e.target.value)}
            />
            <InputField
              placeholder={"Description"}
              onChange={(e) => handleChange("description", e.target.value)}
            />
            <InputField
              placeholder={"Platform"}
              onChange={(e) => handleChange("platform", e.target.value)}
            />
            <InputField
              placeholder={"Solution explanation"}
              onChange={(e) => handleChange("solutionExplanation", e.target.value)}
            />

            <label className="mt-4" htmlFor="">
              Testcase 1
            </label>
            <InputField
              placeholder={"Input"}
              onChange={(e) => handleChange("testCase1Input", e.target.value)}
            />
            <InputField
              placeholder={"Output"}
              onChange={(e) =>  handleChange("testCase1Output", e.target.value)}
            />
            <InputField
              placeholder={"Explanation"}
              onChange={(e) =>  handleChange("testCase1Explanation", e.target.value)}
            />

            <label className="mt-4" htmlFor="">
              Testcase 2
            </label>
            <InputField
              placeholder={"Input"}
              onChange={(e) => handleChange("testCase2Input", e.target.value)}
            />
            <InputField
              placeholder={"Output"}
              onChange={(e) => handleChange("testCase2Output", e.target.value)}
            />
            <InputField
              placeholder={"Explanation"}
              onChange={(e) => handleChange("testCase2Explanation", e.target.value)}
            />

            <label className="mt-4" htmlFor="">
              BruteForce
            </label>
            <InputField
              placeholder={"Heading"}
              onChange={(e) => handleChange("bruteForceHeading", e.target.value)}
            />
            <TextArea
              placeholder={"Steps"}
              onChange={(e) => handleChange("bruteForceSteps", e.target.value)}
            />
            <InputField
              placeholder={"Summary"}
              onChange={(e) => handleChange("bruteForceSummary", e.target.value)}
            />
            <InputField
              placeholder={"Image"}
              onChange={(e) => handleChange("bruteForceImage", e.target.value)}
            />

            <label className="mt-4" htmlFor="">
              Efficent
            </label>
            <InputField
              placeholder={"Heading"}
              onChange={(e) => handleChange("efficientHeading", e.target.value)}
            />
            <TextArea
              placeholder={"Steps"}
              onChange={(e) =>  handleChange("efficientSteps", e.target.value)}
            />
            <InputField
              placeholder={"Summary"}
              onChange={(e) =>  handleChange("efficientSummary", e.target.value)}
            />
            <InputField
              placeholder={"Image"}
              onChange={(e) =>  handleChange("efficientImage", e.target.value)}
            />

            <label className="mt-4" htmlFor="">
              Code
            </label>
            <InputField
              placeholder={"Replit"}
              onChange={(e) => handleChange("replit", e.target.value)}
            />
          </div>
        </FieldWrapper>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

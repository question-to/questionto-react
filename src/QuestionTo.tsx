//Required react imports
import React, { FunctionComponent, ReactElement } from "react";

//Declare useQuestionTo
import { useQuestionTo } from "./useQuestionTo";

//Declare props
type Props = {
  projectId: Parameters<typeof useQuestionTo>[0],
  children?: ReactElement | ((props: object) => ReactElement),
  userId?: string,
  theme?: string,
  devMode: boolean
}

//Export main QuestionTo function
export const QuestionTo: FunctionComponent<Props> = (props) => {
  useQuestionTo(props.projectId, props.devMode);

  if (!props.children) return null;

  //Adds main ID to button + other props
  const childrenProps = {
    "id": "questionto-button",
    "data-questionto-userid": props.userId,
    "data-questionto-theme": props.theme
  }

  //Adds element to dom with new props
  if (React.isValidElement(props.children)) {
    return React.cloneElement(props.children, childrenProps);
  }

  if (typeof props.children === "function") {
    return props.children(childrenProps);
  }

  return null
}

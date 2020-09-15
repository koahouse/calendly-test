export const getSubHeadingForStep = (
  {
    YOURE_TAKING_A_POSITIVE_STEP,
    SOME_MORE_COMFORTING_COPY,
    CARE_NAVIGATION_IS,
    YOURE_DONE,
  },
  step
) =>
  ({
    0: YOURE_TAKING_A_POSITIVE_STEP,
    1: SOME_MORE_COMFORTING_COPY,
    2: CARE_NAVIGATION_IS,
    3: YOURE_DONE,
  }[step]);
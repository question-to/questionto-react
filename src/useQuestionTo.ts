import { useEffect } from "react";

export const useQuestionTo = (projectId: string) =>
  useEffect(() => {
    // @ts-ignore
    if (window.__question_to_inserted__) return;
    // @ts-ignore
    window.__question_to_inserted__ = true;

    const script = document.createElement("script");
    script.src = `https://question.to/js/embed.js?ref=${projectId}`;
    script.defer = true;

    const onScriptError = () => script.remove();
    script.addEventListener("error", onScriptError);

    document.body.appendChild(script);
  }, [])

import Editor from "@monaco-editor/react";

const CodeEditor = ({theme}) => {
  const code = "console.log('Welcome to Swap Skill');";
  return (
    <Editor
      height="510px"
      width="100%"
      language="cpp"
      theme={theme}
      value={code}
      options={{
        inlineSuggest: true,
        fontSize: "16px",
        formatOnType: true,
        autoClosingBrackets: true,
        minimap: { scale: 10 }
      }}
    />
  );
}
export default CodeEditor;
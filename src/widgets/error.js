export const errorGenerator = (errObj) => {
  const div = document.createElement("div");
  div.innerText = `${errObj.label} is required.`;
  div.addEventListener("click", () => {
    document.getElementById(errObj.id).focus();
  });
  div.style.color = "red";
  return div;
};

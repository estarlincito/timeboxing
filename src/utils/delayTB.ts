const delayTB = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { delayTB };

export const conciseEthAddress = (
  addr: string,
  significantCharacters: number = 3
) => {
  if (!addr || !addr.substring) return "";
  return (
    addr.substring(0, significantCharacters + 4) +
    "..." +
    addr.substring(addr.length - 4, addr.length)
  );
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

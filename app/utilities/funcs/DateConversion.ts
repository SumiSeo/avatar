export default function dateConversion(dateObj: string): string {
  const year = dateObj.slice(0, 4);
  const month = new Date(dateObj).toLocaleDateString("en-US", {
    month: "long",
  });
  const day = dateObj.slice(8);
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

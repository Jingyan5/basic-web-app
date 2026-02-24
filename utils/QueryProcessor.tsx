export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Jing";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "jingyan5";
  }
  if (query.toLowerCase().includes("plus")) {
  const match = query.match(/(\d+) plus (\d+)/);
  if (match) {
    const result = parseInt(match[1]) + parseInt(match[2]);
    return result.toString();
  }
}

  return "";
}

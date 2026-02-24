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
    const matches = query.match(/\d+/g);
    if (matches) {
      const result = matches.reduce((sum, n) => sum + parseInt(n), 0);
      return result.toString();
    }
  }
  if (query.toLowerCase().includes("multiplied")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const result = matches.reduce((product, n) => product * parseInt(n), 1);
      return result.toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const result = matches.slice(1).reduce((diff, n) => diff - parseInt(n), parseInt(matches[0]));
      return result.toString();
    }
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
  const match = query.match(/[\d,\s]+(?=\?|$)/);
  if (match) {
    const numbers = match[0].split(",").map((n) => parseInt(n.trim()));
    const result = numbers.filter((n) => {
      const sqrt = Math.round(Math.sqrt(n));
      const cbrt = Math.round(Math.cbrt(n));
      return sqrt * sqrt === n && cbrt * cbrt * cbrt === n;
    });
    return result.join(", ");
  }
}

  return "";
}

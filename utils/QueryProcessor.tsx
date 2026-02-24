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
  if (query.toLowerCase().includes("multiplied")) {
    const match = query.match(/(\d+) multiplied by(\d+)/);
    if (match) {
      const result = parseInt(match[1]) * parseInt(match[2]);
      return result.toString();
    }
  }
  if (query.toLowerCase().includes("minus")) {
    const match = query.match(/(\d+) minus (\d+)/);
    if (match) {
      const result = parseInt(match[1]) - parseInt(match[2]);
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

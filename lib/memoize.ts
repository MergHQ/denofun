/**
 * **memoize** returns a function that remembers the result of a function with a given parameters so it can cache the previous results
 * @param fn  function which results can be cached
 * @param ttl cache lifetime in milliseconds
 * @returns function returning cached results (after first call)
 */
export default function memoize<A>(
  fn: (...xs: any[]) => A,
  ttl: number,
): (...xs: any[]) => A {
  const cache = new Map();
  return (...xs: any[]): A => {
    const args = JSON.stringify(xs);

    if (cache.has(args)) {
      const cached = cache.get(args)!
      if ((Date.now() - cached.requested) < ttl)
        return cached.result
    }

    const result = fn.apply(null, xs);
    cache.set(args, { requested: Date.now(), result });
    return result;
  };
}
